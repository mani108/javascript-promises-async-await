import fetchWithTimeout from "services.js";

const movies = require("data/movies.json");
export function fetchMovies(){
    const resolvedFunction = () => movies;
    return fetchWithTimeout(1000)
        .then(resolvedFunction());
}

const moviePromise = fetchMovies();