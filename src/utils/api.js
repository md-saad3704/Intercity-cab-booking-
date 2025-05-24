import axios from "axios";

const API_BASE_URL = "https://your-backend-api.com"; // Replace with actual API URL

// Fetch available cabs based on city selection
export const fetchCabs = async (departure, arrival) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cabs?departure=${departure}&arrival=${arrival}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cabs:", error);
    return [];
  }
};

// Submit passenger details
export const submitPassengerInfo = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/passenger`, data);
    return response.data;
  } catch (error) {
    console.error("Error submitting passenger info:", error);
  }
};

// Process payment
export const processPayment = async (paymentData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/payment`, paymentData);
    return response.data;
  } catch (error) {
    console.error("Payment processing error:", error);
  }
};