from flask import Blueprint, jsonify, request
from api.utils import generate_gpt_response

chatbot_blueprint = Blueprint('chatbot', __name__)


@chatbot_blueprint.route('/chatbot', methods=['Get'])
def chatbot():
    
    prompt = request.args.get('prompt')
    message = generate_gpt_response(prompt)
    return jsonify({"message": message})

