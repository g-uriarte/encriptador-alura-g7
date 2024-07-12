import { Toast } from "./toast.js";

const ui = () => {
	let interaction = false;

	const hasInteraction = () => interaction;
	const checkInteraction = () => {
		interaction = true;
	};

	const TEXT_AREA_ID = "text-to-encript";
	const BUTTON_ENCRIPT_SELECTOR = "button-encript";
	const BUTTON_DECRIPT_SELECTOR = "button-decript";
	const CONTAINER_RESULT_TEXT = ".result";

	const textarea = document.getElementById(TEXT_AREA_ID);
	const buttonEncript = document.getElementById(BUTTON_ENCRIPT_SELECTOR);
	const buttonDecript = document.getElementById(BUTTON_DECRIPT_SELECTOR);

	const getTextAreaValue = () => textarea.value;
	const getContainerResultText = () =>
		document.querySelector(CONTAINER_RESULT_TEXT);
	const getSectionSolution = () =>
		document.querySelector(".result-container");
	const getCopyButton = () => document.getElementById("copy");

	/**
	 *
	 * @param {string} text
	 */
	const setResponseText = (text) => {
		const resultText = document.getElementById("result-text");
		if (resultText !== null) {
			resultText.innerHTML = text;
		}
	};

	const addEventListenerToCopyButton = () => {
		getCopyButton().addEventListener("click", () => {
			const resultText = document.getElementById("result-text");
            const text = resultText.innerHTML;
			if (navigator.clipboard) {
				navigator.clipboard
					.writeText(text)
					.then(() => Toast.create("Texto copiado!", "info"))
					.catch((e) => {
						Toast.create("Error al copiar :(", "error");
						console.error(e);
					});
			} else {
				resultText.select();
				const ok = document.execCommand("copy");
				if (ok) {
					Toast.create("Texto copiado!", "info");
				} else {
					Toast.create("Error al copiar :(", "error");
					console.error(e);
				}
			}
		});
	};

	const updateResponseContainer = () => {
		const section = getSectionSolution();
		const resultContainer = getContainerResultText();
		resultContainer.innerHTML = "";
		section.style["justify-content"] = "space-evenly";
		resultContainer.style["width"] = "100%";
		resultContainer.style["height"] = "100%";
		resultContainer.style["justify-content"] = "space-between";
		resultContainer.style["padding-top"] = "20px";
		resultContainer.style["padding-right"] = "20px";
		resultContainer.style["padding-bottom"] = "25px";
		resultContainer.style["padding-left"] = "20px";
		resultContainer.style["align-items"] = "start";

		resultContainer.insertAdjacentHTML(
			"beforeend",
			`<textarea id='result-text' disabled ></textarea>`
		);
		resultContainer.insertAdjacentHTML(
			"beforeend",
			`<button id='copy' class='button button-light-blue' >Copiar</button>`
		);

		addEventListenerToCopyButton();
	};

	const markTextAreaError = () => {
		textarea.classList.add("input-error");
	};

	return {
		textarea,
		buttonDecript,
		buttonEncript,
		setResponseText,
		getTextAreaValue,
		hasInteraction,
		checkInteraction,
		updateResponseContainer,
		markTextAreaError,
	};
};

const UI = ui();

export { UI };
