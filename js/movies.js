const moviesTable = document.getElementById("movies-table")

const movies = [
    {
        title: "SHERLOCK GNOMES",
        rating: "PG",
        genre: "Kids & Family, Comedy, Adventure, Mystery & Thriller, Animation",
        director: "John Stevenson",
        release_date: "Mar 23, 2018",
        runtime: "1h 26m",
        box_office_gross: 43.1
    },
    {
        title: "GNOMEO & JULIET",
        rating: "G",
        genre: "Kids & Family, Comedy, Adventure, Mystery & Thriller, Animation",
        director: "Kelly Asbury",
        release_date: "Feb 11, 2011",
        runtime: "1h 24m",
        box_office_gross: 99.9
    },
    {
        title: "GNOME ALONE",
        rating: "PG",
        genre: "Kids & Family, Comedy, Fantasy, Animation",
        director: "Peter Lepeniotis",
        release_date: "Mar 2, 2018",
        runtime: "1h 21m",
        box_office_gross: 10.8
    },
]

for (let i = 0; i < movies.length; i++) {
    moviesTable.innerHTML += `
        <tr>
        <td>${movies[i].title}</td>
        <td>${movies[i].rating}</td>
        <td>${movies[i].genre}</td>
        <td>${movies[i].director}</td>
        <td>${movies[i].release_date}</td>
        <td>${movies[i].runtime}</td>
        <td>${movies[i].box_office_gross}</td>
        </tr>` 
}


