const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/; // At least 1 uppercase, 1 digit, min 6 chars

export const emailValidation = email => {
  if (!email) {
    return 'Please enter your email';
  }
  if (!emailRegex.test(email)) {
    return 'Please enter your valid email';
  }
  return '';
};

export const passwordValidation = password => {
  if (!password) {
    return 'Please enter your password';
  }
  if (!passwordRegex.test(password)) {
    return 'At least 1 uppercase, 1 digit, min 6 chars';
  }

  return '';
};
