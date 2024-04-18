from flask import Blueprint, jsonify, request
from api.utils import generate_gpt_response

messages_blueprint = Blueprint('messages', __name__)

@messages_blueprint.route('/messages', methods=['GET'])
def generate_welcome_message():
    name = request.args.get('name', default='Guest', type=str)
    title = request.args.get('title', default='Member', type=str)
    description = request.args.get('description', default='contributing to our projects', type=str)
    
    prompt = (
        f"Craft a brief message, 10 to 15 words, where {name}, our {title}, either personally "
        f"welcomes a visitor or shares a quote related to {description}. Ensure the tone is warm and inviting. "
        "If using a quote, make it relevant to their expertise and role."
    )    
    
    try:
        response = generate_gpt_response(prompt)
    except Exception as e:
        response = f"Welcome to our team! We're glad you're here."

    return jsonify({"welcome_message": response})