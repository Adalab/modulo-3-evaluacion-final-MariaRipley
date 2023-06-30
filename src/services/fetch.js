function getDataApi() {
  return fetch(
    "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
  ).then((response) => response.json());
}

const objectAPI = {
  getDataApi: getDataApi,
};

export default objectAPI;
