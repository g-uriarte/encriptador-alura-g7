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
 * it's convert the character into asociated text.
 *
 * @param {string} character The letter can only be vocals in lowercase
 */
const convertCharacterToEncriptedText = (character) => {
	return characterToEncriptedText.get(character);
};

/**
 * Encrypts the text and returns it
 * @param {string} text
 */
const encript = (text) => {
	let characters = text.split('');
	let textEncripted = characters
		.map((character) => {
			if (characterToEncriptedText.has(character)) {
				return convertCharacterToEncriptedText(character);
			}
			return character;
		})
		.join('');

	return textEncripted;
};

/**
 * Decrypt the text and return it
 * @param {string} text
 */
const decript = (text) => {
	let textDecripted = [];
	let letter = '';
	for (let index = 0; index < text.length; ) {
		letter = text[index];
		if (characterToEncriptedText.has(letter)) {
			const text = characterToEncriptedText.get(letter);
			const lengthText = text.length;
			textDecripted.push(letter);
			index += lengthText;
		} else {
			textDecripted.push(letter);
			index++;
		}
	}

	return textDecripted.join('');
};

const challengeEncryptionMode = {
	encript,
	decript,
};

export { challengeEncryptionMode };
