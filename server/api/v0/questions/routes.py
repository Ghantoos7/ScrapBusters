from flask import Blueprint, jsonify, request
from api.utils import generate_gpt_response

questions_blueprint = Blueprint('questions', __name__)

@questions_blueprint.route('/questions', methods=['GET'])
def answer_question():
    question = request.args.get('question', default='', type=str)
    description = request.args.get('description', default='', type=str)

    if not question:
        return jsonify({"error": "Question parameter is required"}), 400

    prompt = (
    f"We received a general question: {question}. "
    "Please provide a simple and clear explanation, using examples that are simple where possible. "
    f"If the question relates to {description}, MAKE SURE TO USE THE INFO GIVEN IF POSSIBLE SPECIALLY IF IT IS RELATED TO THE QUESTION."
    "feel free to use this information in your explanation."
    )

    try:
        response = generate_gpt_response(prompt)
    except Exception as e:
        response = "Sorry, we couldn't process your question at the moment."

    return jsonify({"answer": response})