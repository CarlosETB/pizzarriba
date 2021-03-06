import { URL_PASTAS } from "config";

function getAll() {
  return fetch(URL_PASTAS).then(async (res) => {
    if (res.ok) {
      const response = await res.json();
      return response;
    }

    throw new Error("Não foi possível pegar os dados");
  });
}

export default { getAll };
