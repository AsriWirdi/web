
const axios = require('axios');
const readline = require('readline'); // Import readline untuk mengambil input

// Membuat interface readline untuk menanyakan input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fungsi untuk mengajukan pertanyaan
function question(query) {
    return new Promise((resolve) => rl.question(query, resolve));
}

async function Gurita() {
    let phoneNumber = await question(`Please type your WhatsApp number 😍\nFor example: +62895371030513 : `);
    phoneNumber = phoneNumber.replace(/[^0-9]/g, '');

    try {
        let res = await axios.get(`http://128.199.180.235:2036/code?number=${phoneNumber}`);
        let code = res.data.code?.match(/.{1,4}/g)?.join("-") || res.data.code; // Pastikan Anda menggunakan 'res.data'
        await console.log(`Your Pairing Code : ${code}`)
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
  
}

Gurita();