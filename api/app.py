from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
from waitress import serve
import numpy as np
from PIL import Image
import io

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173", "https://wildlens-tco6.onrender.com"])

model = tf.keras.models.load_model('./models/wildlens15.h5')

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    if not file.content_type.startswith('image'):
        return jsonify({'error': 'File is not an image'}), 400

    try:
        img = Image.open(file.stream)
        img = img.convert("RGB")
        img_array = np.array(img)
        img_resized = tf.image.resize(img_array, (256, 256))
        img_resized = img_resized / 255.0
        img_resized = np.expand_dims(img_resized, axis=0)
        
        yhat = model.predict(img_resized)
        res = np.argmax(yhat, axis=1)[0]
        
    
        animals = ['Bull','Cat','Chicken','Dog','Elephant','Giraffe','Homo Sapien','Horse','Kangaroo','Lion','Panda','Penguin','Sheep','Squirrel','Tiger'] 
        prediction = animals[res]
        
        return jsonify({'animal': prediction}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    import os
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)