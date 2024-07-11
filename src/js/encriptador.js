/**
 * @type {Map<string,string>}
 */
const characterToEncriptedText = new Map();

characterToEncriptedText.set('a', 'ai');
characterToEncriptedText.set('e', 'enter');
characterToEncriptedText.set('i', 'imes');
characterToEncriptedText.set('o', 'ober');
characterToEncriptedText.set('u', 'ufat');

/**
 * @type {Map<string,string>}
 */
const encriptedTextToCharacter = new Map();

encriptedTextToCharacter.set('ai', 'a');
encriptedTextToCharacter.set('enter', 'e');
encriptedTextToCharacter.set('imes', 'i');
encriptedTextToCharacter.set('ober', 'o');
encriptedTextToCharacter.set('ufat', 'u');

/**
 * it's convert the character into asociated text.
 * 
 * @param {string} character The letter can only be vocals in lowercase
 */
const convertCharacterToEncriptedText = (character) => {
    if (characterToEncriptedText.has(character)) {
        return characterToEncriptedText.get(character);
    }
    throw new Error(`No se puede encriptar la letra ${character}.`);
}

/**
 * it's convert encripted text into asociated character.
 * @param {string} encriptedText the encripted text
 */
const convertEncriptedTextToCharacter = (encriptedText) => {
    if (encriptedTextToCharacter.has(encriptedText)) {
        return encriptedTextToCharacter.get(encriptedText);
    }
    throw new Error(`No se puede desencriptar la letra`);
}

/**
 * Encrypts the text and returns it
 * @param {string} text 
 */
const encript = (text) => {
    let textEncripted = '';

    return textEncripted;
}


/**
 * Decrypt the text and return it
 * @param {string} text 
 */
const decript = (text) => {
    let textDecripted = '';

    return textDecripted;
}

export { encript, decript };