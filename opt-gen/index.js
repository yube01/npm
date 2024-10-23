"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateOTP = (options = {}) => {
    const { length = 6, digits = true, upperCaseAlphabets = false, lowerCaseAlphabets = false, specialChars = false, } = options;
    const digitChars = '0123456789';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const specialCharsSet = '!@#$%^&*()_+[]{}|;:,.<>?';
    let characterPool = '';
    if (digits)
        characterPool += digitChars;
    if (upperCaseAlphabets)
        characterPool += upperChars;
    if (lowerCaseAlphabets)
        characterPool += lowerChars;
    if (specialChars)
        characterPool += specialCharsSet;
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
exports.default = generateOTP;
