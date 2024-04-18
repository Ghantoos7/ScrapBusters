// src/api/user.js
const BASE_URL = process.env.REACT_APP_API_URL;

export const fetchWelcomeMessage = async (name, title, description) => {
    try {
       
        
        const url = new URL(`${BASE_URL}/api/v0/messages/messages`);
        url.searchParams.append('name', name);
        url.searchParams.append('title', title);
        url.searchParams.append('description', description);
        console.log("Attempting to fetch from URL:", url.toString());


        const response = await fetch(url.toString()); 
        const data = await response.json();
        return data.welcome_message;
    } catch (error) {
        console.error('Error fetching welcome message:', error);
        throw error;
    }
};
