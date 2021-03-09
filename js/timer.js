let deadLine = '2021-10-21';

function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    seconds = Math.floor((t/1000) % 60),
    minutes = Math.floor((t/1000/60) % 60),
    minutes = Math.floor((t/1000/60) % 60),
    hours = Math.floor((t/1000/60/60) % 24),
    days = Math.floor((t/(1000*60*60*24)));

    return {

    };

}