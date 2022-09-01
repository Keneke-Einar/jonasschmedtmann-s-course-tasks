const dolphinesRound1 = 96;
const dolphinesRound2 = 10;
const dolphinesRound3 = 89;
const koalasRound1 = 96;
const koalasRound2 = 10;
const koalasRound3 = 89;

let koalasAverage = CountAverage(koalasRound1, koalasRound2, koalasRound3);
let dolphinesAverage = CountAverage(dolphinesRound1, dolphinesRound2, dolphinesRound3);

if ((koalasAverage > 100) || (dolphinesAverage > 100)) console.log(WinnerCheck(koalasAverage, dolphinesAverage));
else {
    console.log(`Avrg less than 100`);
}


function CountAverage(round1, round2, round3) {
    return ((round1 + round2 + round3) / 3)
}

function WinnerCheck(teamKoalas, teamDolphines) {
    if (teamKoalas > teamDolphines) return ('Koala wins');
    if (teamKoalas < teamDolphines) return ('Dolphines wins');
    return ('Draw');
}