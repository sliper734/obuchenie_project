"use strict";

let numberOfFilms;

function start() {
    numberOfFilms=+prompt("Сколько фильмов вы уже посмотрели?","");
    while(numberOfFilms==null || isNaN(numberOfFilms) || numberOfFilms =='') {
        numberOfFilms=+prompt("Сколько фильмов вы уже посмотрели?","");
    }
}

start();

const personalMovieDB={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

function rememberMyFilms() {
    for (let i=1;i<3;i++){
        const nameMovie=prompt("Один из последних просмотренных фильмов?"+i,""),
              movieMark=prompt("На сколько оцение его?"+i,"");
        if( nameMovie==null || movieMark==null ){
            i--;
            continue;
        }else if(nameMovie.length==0 || movieMark.length==0 || nameMovie.length>50 || movieMark.length>50 )
            {
                i--;
                continue;
            }
        personalMovieDB.movies[nameMovie]=movieMark;
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    
    if (personalMovieDB.count<10){
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count>=10 && personalMovieDB.count <=30){
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count>30){
        console.log('Вы киносан');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for(let i=0;i<3;i++) {
        personalMovieDB.genres[i]=prompt("Ваш любимый жанр под номером "+(i+1),"");
    }
}

writeYourGenres();