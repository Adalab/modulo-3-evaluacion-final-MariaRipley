function getDataApi() {
  return fetch(
    "https://rickandmortyapi.com/documentation/#get-all-characters"
  ).then((response) => response.json());
}

const objectAPI = {
  getDataApi: getDataApi,
};

export default objectAPI;
