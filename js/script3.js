let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// let a = prompt('Один из просмотренных фильмов?', ''),
//     b = prompt('Какую оценку ему поставите?', ''),
//     c = prompt('Один из просмотренных фильмов?', ''),
//     d = prompt('Какую оценку ему поставите?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

    
for (let i = 0; i < 2; i++) {
    let a = prompt('Один из просмотренных фильмов?', ''),
        b = prompt('Какую оценку ему поставите?', '');

    if (a != '' && b != '' && a != null && b != null && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        alert('Вводи верные данные и не пытайся жать отмена)')
        i--; // Чтобы вернуться назад на одну итерацию цикла
    }
    
    
}

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count > 9 && personalMovieDB.count < 31) {
        alert('Вы классический зритель');
    } else {
        alert('Вы киноман');
    }
console.log(personalMovieDB);