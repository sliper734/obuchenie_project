"use strict";

const numberOfFilms=prompt("Сколько фильмов вы уже посмотрели?","");
console.log(numberOfFilms);

const personalMovieDB={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};
console.log(personalMovieDB);

const nameMovie=prompt("Один из последних просмотренных фильмов?",""),
      movieMark=prompt("На сколько оцение его?",""),
      nameMovie1=prompt("Один из последних просмотренных фильмов?",""),
      movieMark1=prompt("На сколько оцение его?","");

personalMovieDB.movies[nameMovie]=movieMark;
personalMovieDB.movies[nameMovie1]=movieMark1;
console.log(personalMovieDB);