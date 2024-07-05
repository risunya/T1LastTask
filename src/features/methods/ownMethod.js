function encodeEmailAndCode(email, code) {
    const str = `${email}:${code}`;
    const encodedStr = btoa(str); 
    return encodedStr;
}
// Пример исходных данных
const email = 'risunyaaa@yandex.ru';
const code = 'somecodefort1practice';
const result = encodeEmailAndCode(email, code);
console.log(result);




