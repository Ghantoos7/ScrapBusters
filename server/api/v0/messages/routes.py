from flask import Blueprint, jsonify, request
from api.utils import generate_gpt_response

messages_blueprint = Blueprint('messages', __name__)

@messages_blueprint.route('/messages', methods=['GET'])
def generate_welcome_message():
    name = request.args.get('name', default='Guest', type=str)
    title = request.args.get('title', default='Member', type=str)
    description = request.args.get('description', default='contributing to our projects', type=str)
    
    prompt = f"Craft a brief message as if {name}, our {title}, is personally welcoming a visitor to the page, it does not need to start with welcome it could be a brief introduction to the person then a welcome chose randomly. {name} specializes in {description}. The message should be 10 to 15 words and reflect a warm, inviting tone."
    try:
        response = generate_gpt_response(prompt)
    except Exception as e:
        response = f"Welcome to our team! We're glad you're here."

    return jsonify({"welcome_message": response})