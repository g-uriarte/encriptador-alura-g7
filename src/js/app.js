import { UI } from "./ui.js";
import { challengeEncryptionMode } from "./encriptador.js";
import { Toast } from './toast.js'

/**
 *
 * @param {UI} ui
 * @param {challengeEncryptionMode} encryptionMode 
 * @returns
 */
const app = (ui, encryptionMode) => {
	/**
	 * Validate the input text
	 * @param {string} text text to validate
	 */
	const validateText = (text) => {
		if (text === '') {
			return {
				error: true,
				message: 'Por favor introduzca un texto.'
			}
		}

		const hasValidText = /^[a-z0-9]+$/g.test(text);
		if (!hasValidText) {
			return {
				error: true,
				message: 'Por favor solo introduzca letras minúsculas, sin acentos y sin caracteres especiales.',
			};
		}
		return {
			error: false,
		};
	};

	/**
	 * Perform the ecnript | decript action
	 * @param {('encript' | 'decript')} type
	 */
	const handleAction = (type) => {
		const text = ui.getTextAreaValue().trim();
		const { error, message } = validateText(text);
		if (error) {
			ui.markTextAreaError();
			Toast.create(message, 'error')
		} else {
			const resultText = type === 'encript' ? encryptionMode.encript(text) : encryptionMode.decript(text);
			if (!ui.hasInteraction()) {
				ui.checkInteraction();
				ui.updateResponseContainer();
			}
			ui.setResponseText(resultText);
		}
	};

	const addEventListeners = () => {
		ui.buttonEncript.addEventListener("click", () => { handleAction('encript'); });
		ui.buttonDecript.addEventListener("click", () => { handleAction('decript'); });
		ui.textarea.addEventListener('input', () => { ui.unmarkTextAreaError(); })
	}

	const init = () => {
		addEventListeners();
	};

	return {
		init: init,
	};
};

const App = app(UI, challengeEncryptionMode);

export { App };
