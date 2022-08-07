from flask import Flask,jsonify, request
import soundfile as sf
from random import randint
from typing import List

def gen_range() -> List[int]:
    low  =  randint(300,5000)
    high = randint(400,7000)
    return [low,high]

app = Flask(__name__)


# # audio upload route 
# @app.post("/api/audio/upload")
# def upload():
# 	wav_file = request.files['file']
# 	if wav_file.filename == '':
# 		wav_file.save(wav_file.filename)
# 	data , rate =  sf.read(wav_file.filename)
# 	meter = pyln.Meter(rate) # create BS.1770 meter
# loudness = meter.integrated_loudness(data) # measure loudness

	

# get scream range 
@app.post("/api/audio/range")
def range():
	range = gen_range()
	return jsonify({'range':range}), 200

