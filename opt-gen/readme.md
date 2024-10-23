import generateOTP from 'otp-generator';

const otp = generateOTP({
    length: 8,
    digits: true,
    upperCaseAlphabets: true,
    lowerCaseAlphabets: false,
    specialChars: false,
});

console.log('Generated OTP:', otp);


