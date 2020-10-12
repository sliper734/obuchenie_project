"use strict";

const numberOfFilms=+prompt("Сколько фильмов вы уже посмотрели?","");
const personalMovieDB={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

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

console.log(personalMovieDB);
if (personalMovieDB.count<10){
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count>=10 && personalMovieDB.count <=30){
    console.log('Вы классический зритель');
} else if (personalMovieDB.count>30){
    console.log('Вы киносан');
} else {
    console.log('Произошла ошибка');
}