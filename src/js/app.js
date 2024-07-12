import { UI } from "./ui.js";
import { challengeEncryptionMode } from "./encriptador.js";

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

	const init = () => {
		ui.buttonEncript.addEventListener("click", () => {
			const text = ui.getTextAreaValue().trim();
			const { error, messages } = validateText(text);
			if (error) {
				messages.forEach((error) => console.log(error));
			} else {
				const encriptedText = encryptionMode.encript(text);
				if (!ui.hasInteraction()) {
					console.log('just one time')
					ui.checkInteraction();
					ui.updateResponseContainer();
				}
				ui.setResponseText(encriptedText);
			}
		});

		ui.buttonDecript.addEventListener("click", () => {
			console.log("decript");
			const text = ui.getTextAreaValue().trim();
			const { error, messages } = validateText(text);
			if (error) {
				console.log(messages);
			} else {
				const decriptedText = encryptionMode.decript(text);
				if (!ui.hasInteraction()) {
					console.log('just one time')
					ui.checkInteraction();
					ui.updateResponseContainer();
				}
				ui.setResponseText(decriptedText);
			}
		});
	};

	return {
		init: init,
	};
};

const App = app(UI, challengeEncryptionMode);

export { App };
