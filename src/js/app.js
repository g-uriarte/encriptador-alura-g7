import { UI } from "./ui.js";
import { challengeEncryptionMode } from "./encriptador.js";
import { Toast } from './toast.js'

/**
 *
 * @param {*} ui
 * @returns
 */
const app = (ui, encryptionMode) => {
	/**
	 *
	 * @param {string} text
	 */
	const validateText = (text) => {
		const messages = [];
		if (text === "") {
			messages.push("Introduzca un texto a codificar.");
		}
		const hasUppercaseLetter = /[A-Z]/.test(text);
		if (hasUppercaseLetter) {
			messages.push("No se permiten letras mayusculas.");
		}
		const hasAccentLetters = /[áéíóúÁÉÍÓÚ]/.test(text);
		if (hasAccentLetters) {
			messages.push("No se permiten letras con tilde.");
		}

		if (messages.length > 0) {
			return {
				error: true,
				messages: messages,
			};
		} else {
			return {
				error: false,
				messages: messages,
			};
		}
	};

	/**
	 *
	 * @param {('encript' | 'decript')} type
	 */
	const handleAction = (type) => {
		const text = ui.getTextAreaValue().trim();
		const { error, messages } = validateText(text);
		if (error) {
			Toast.create(messages.map(message => `<p style='font-size: 15px'>${message}</p>`).join(''), 'error')
		} else {
			const resultText = type === 'encript' ? encryptionMode.encript(text) : encryptionMode.decript(text);
			if (!ui.hasInteraction()) {
				ui.checkInteraction();
				ui.updateResponseContainer();
			}
			ui.setResponseText(resultText);
		}
	};

	const addEventListener = () => {
		ui.buttonEncript.addEventListener("click", () => { handleAction('encript'); });
		ui.buttonDecript.addEventListener("click", () => { handleAction('decript'); });
	}

	const init = () => {
		addEventListener();
	};

	return {
		init: init,
	};
};

const App = app(UI, challengeEncryptionMode);

export { App };
