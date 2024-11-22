import os
import numpy as np
from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from PIL import Image
import io

app = Flask(__name__)

model = load_model('../models/wildlens10.h5')

# A sample class list, replace with your own
animal_classes = ['Cat','Dog','Elephant','Giraffe','Horse','Kangaroo','Lion','Panda','Penguin','Tiger'] 



@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    try:
        # Load the image
        img = Image.open(io.BytesIO(file.read()))
        resize = tf.image.resize(img, (256,256))
        yhat = model.predict(np.expand_dims(resize/255, 0))

        
        res=np.argmax(yhat, axis=1)[0]
        
        # Get the predicted class name
        predicted_animal = animal_classes[res]
        
        return jsonify({'animal': predicted_animal}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
