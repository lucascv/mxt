const API_KEY = "api_key=2a187e17cbf3dfddc920f8fb41f7aef5";
const URL = `https://api.themoviedb.org/3/search/person?${API_KEY}&query=`;

export const fetchSearch = (type, query) => (
    fetch(`${URL}${query}`)
      .then((response) => (
        response
          .json()
          .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
      ))
  );