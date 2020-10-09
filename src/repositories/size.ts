import { URL_SIZES } from "config";

function getAll() {
  return fetch(URL_SIZES).then(async (res) => {
    if (res.ok) {
      const response = await res.json();
      return response;
    }

    throw new Error("Não foi possível pegar os dados");
  });
}

export default { getAll };
