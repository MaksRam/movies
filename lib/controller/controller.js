const getMovies = require('../movies/movies');
const getCinemas = require('../cinemas/cinemas')

function getById (ctx) {
    const index = ctx.request.params.id;
    ctx.body = getMovies.movies[index];
};

function showAll(ctx) {
    ctx.body = getMovies.movies;
};

function getCinema(ctx) {
    ctx.body = getCinemas.cinemas;
}



module.exports = { getById, showAll, getCinema };