# quote_api.py
from flask import Flask, jsonify
import random

app = Flask(__name__)

QUOTES = [
    "Discipline is choosing between what you want now and what you want most.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Your body can stand almost anything. It’s your mind that you have to convince."
]

@app.route('/api/quote')
def get_quote():
    return jsonify({"quote": random.choice(QUOTES)})

if __name__ == '__main__':
    app.run(port=5001)
