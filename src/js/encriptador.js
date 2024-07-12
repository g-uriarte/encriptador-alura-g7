/**
 * Encrypts the text and returns it
 * @param {string} text 
 */
const encript = (text) => {
    let textEncripted = text
        .replace(/a/g, 'ai')
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return textEncripted;
}


/**
 * Decrypt the text and return it
 * @param {string} text 
 */
const decript = (text) => {
    let textDecripted = text
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return textDecripted;
}

const challengeEncryptionMode = {
    encript, decript
}

export { challengeEncryptionMode };