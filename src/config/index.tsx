const URL = window.location.hostname.includes("localhost")
  ? "http://localhost:8080"
  : "https://carlostonholi-pizzarriba.herokuapp.com";

const URL_SIZES = `${URL}/sizes`;
const URL_PASTAS = `${URL}/pastas`;
const URL_FILLINGS = `${URL}/fillings`;

export { URL, URL_SIZES, URL_PASTAS, URL_FILLINGS };
