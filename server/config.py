import os
from dotenv import load_dotenv

# Config class to load environment variables from .env file
class Config:
    load_dotenv()  
    OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')