import { setTimeoutAsync, waitAsync } from "./utils.js";

const toastType = {
	error: "toast-error",
	info: "toast-info",
};


/**
 * Simple toast with one element to display.
 */
const toast = () => {
	const TOAST_CONTAINER_ID = "toast-container";

	const toastContainer = document.getElementById(TOAST_CONTAINER_ID);
	const getToast = () => document.querySelector(".toast");

	const create = async (content, type) => {
		const toastElement = getToast();
		toastElement.innerHTML = content;
		toastElement.classList.add("toast-visible");
		toastElement.classList.add(toastType[type]);
		await setTimeoutAsync((res, rej) => {
            toastElement.classList.remove("toast-visible");
            toastElement.classList.remove(toastType[type]);
            res()
        }, 2000)
        await waitAsync(500);
		toastElement.innerHTML = "";
	};

	return {
		create,
	};
};

const Toast = toast();

export { Toast };
