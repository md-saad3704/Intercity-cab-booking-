// Validate email format
export const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Validate password (Minimum 6 characters)
export const validatePassword = (password) => {
  return password.length >= 6;
};

// Validate passenger details
export const validatePassengers = (passengers) => {
  return passengers.every((p) => p.name.trim() !== "" && p.age > 0 && ["Male", "Female", "Other"].includes(p.gender));
};

// Validate payment details
export const validatePayment = (method, paymentData) => {
  if (method === "card") {
    return paymentData.cardNumber.length === 16 && paymentData.expiry.match(/^(0[1-9]|1[0-2])\/\d{2}$/) && paymentData.cvv.length === 3;
  } else if (method === "upi") {
    return paymentData.upiID.includes("@");
  }
  return false;
};