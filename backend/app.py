from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
from PIL import Image
import io

app = Flask(__name__)
CORS(app)

model = tf.keras.models.load_model('../models/wildlens10.h5')

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    try:
        img = Image.open(file.stream)
        img = img.convert("RGB")
        img_array = np.array(img)
        img_resized = tf.image.resize(img_array, (256, 256))
        img_resized = img_resized / 255.0
        img_resized = np.expand_dims(img_resized, axis=0)
        
        yhat = model.predict(img_resized)
        res = np.argmax(yhat, axis=1)[0]
        
    
        animals = ['Cat','Dog','Elephant','Giraffe','Horse','Kangaroo','Lion','Panda','Penguin','Tiger'] 
        prediction = animals[res]
        
        return jsonify({'animal': prediction}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
