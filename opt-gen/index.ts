interface OTPOptions {
    length?: number;  // Length of the OTP (default: 6)
    digits?: boolean; // Include digits (default: true)
    upperCaseAlphabets?: boolean; // Include uppercase alphabets (default: false)
    lowerCaseAlphabets?: boolean; // Include lowercase alphabets (default: false)
    specialChars?: boolean; // Include special characters (default: false)
}

const generateOTP = (options: OTPOptions = {}): string => {
    const {
        length = 6,
        digits = true,
        upperCaseAlphabets = false,
        lowerCaseAlphabets = false,
        specialChars = false,
    } = options;

    const digitChars = '0123456789';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const specialCharsSet = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characterPool = '';

    if (digits) characterPool += digitChars;
    if (upperCaseAlphabets) characterPool += upperChars;
    if (lowerCaseAlphabets) characterPool += lowerChars;
    if (specialChars) characterPool += specialCharsSet;

    if (characterPool === '') {
        throw new Error('At least one character type must be selected.');
    }

    let otp = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        otp += characterPool[randomIndex];
    }

    return otp;
};

export default generateOTP;
