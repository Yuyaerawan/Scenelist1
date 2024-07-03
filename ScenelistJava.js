function filterMovies() {
    const genreInput = document.getElementById('genreInput').value.toLowerCase();
    const movies = document.querySelectorAll('#movieList li');
    const genres = new Set();

    movies.forEach(movie => {
        const genre = movie.getAttribute('data-genre').toLowerCase();
        if (genre.includes(genreInput)) {
            genres.add(movie.getAttribute('data-genre'));
        }
    });

    movies.forEach(movie => {
        if (genres.has(movie.getAttribute('data-genre'))) {
            movie.style.display = '';
        } else {
            movie.style.display = 'none';
        }
    });
}

function toggleMenu() {
    const menuContent = document.getElementById('menuContent');
    menuContent.style.display = menuContent.style.display === 'none' || menuContent.style.display === '' ? 'block' : 'none';
}
