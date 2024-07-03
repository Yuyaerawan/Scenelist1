// script.js
document.addEventListener('DOMContentLoaded', function() {
    const movies = [
        {
            title: 'The Shawshank Redemption',
            year: 1994,
            description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
        },
        {
            title: 'The Godfather',
            year: 1972,
            description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'
        },
        {
            title: 'The Dark Knight',
            year: 2008,
            description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.'
        }
    ];

    const movieList = document.getElementById('movie-list');

    movies.forEach(function(movie) {
        const listItem = document.createElement('li');

        const title = document.createElement('h2');
        title.textContent = movie.title;
        listItem.appendChild(title);

        const year = document.createElement('p');
        year.textContent = `Year: ${movie.year}`;
        listItem.appendChild(year);

        const description = document.createElement('p');
        description.textContent = movie.description;
        listItem.appendChild(description);

        movieList.appendChild(listItem);
    });
});
