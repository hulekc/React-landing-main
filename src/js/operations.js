import axios from 'axios';

const BASE_URL = 'https://backend-client-50dq.onrender.com/reviews/images';

export const fetchImages = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data.images;  
  } catch (error) {
    throw new Error(error.message);
  }
};
