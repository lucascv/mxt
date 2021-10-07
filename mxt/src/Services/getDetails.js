const API_KEY = "api_key=2a187e17cbf3dfddc920f8fb41f7aef5";

export const getDetails = (id) => (
    fetch(`https://api.themoviedb.org/3/tv/${id}?${API_KEY}`)
      .then((response) => (
        response
          .json()
          .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
      ))
  );