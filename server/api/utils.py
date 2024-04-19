from flask import current_app
from openai import OpenAI

# Establishes connection with OpenAI using API key from app configuration
def get_openai_client():
    api_key = current_app.config.get('OPENAI_API_KEY')
    if not api_key:
        raise ValueError("No OpenAI API key found in the configuration.")
    return OpenAI(api_key=api_key)

# Generates a response from the GPT-3 model given a prompt
def generate_gpt_response(prompt):
    client = get_openai_client() 
    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "system", "content": prompt}]
        )
        return response.choices[0].message.content
    except Exception as e:
        return {"error": str(e)}