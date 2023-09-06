function thepassword (password) {
    if (!password.includes('#')) {
        console.log('Slaptažodis privalo turėti grotažymes')
    } else if (password.length < 16) {
        console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.')
    } else if (password.length > 15 && password.length > 20) {
        console.log('Slaptažodis tinkamas')
    } else if (password.length > 15 && password.length < 20){
        console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.')
    }
}

thepassword('manoslaptazodis')


// let age = prompt()

function amzius (age) {
    if (isNaN(age)) {
        console.log('Netinkamai nurodytas amžius, amžius privalo būti skaičius.')
    } else if (age === 6) {
        console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.')
     } else if (age === 10) {
        console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.')
     } else if (age === 14) {
        console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.')
     } else if (age === 18) {
        console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.')
     } else if (age < 0) {
        console.log('įvestas amžius yra per mažas.')
     } else if (age < 7) {
        console.log('į mokyklą neina.')
    } else if (age < 11) {
        console.log('eina į pradinę klasę.')
     } else if (age < 15) {
        console.log('eina į pagrindinę.')
     } else if (age < 19) {
        console.log('eina į gimnaziją.')
     } else if (age > 18) {
        console.log('mokyklą baigė.')
     } else if (age > 120) {
        console.log('įvestas amžius yra per didelis.')
     }
}
amzius(prompt())







 let correctAnswer11 = 'sun'
//  let playerAnswer11 = 'suns'
 
 let correctAnswer12 = 579
//  let playerAnswer12 = 579

function level1 (playerAnswer11, playerAnswer12) {
    if (playerAnswer11 === correctAnswer11 || playerAnswer12 === correctAnswer12) {
        console.log('Kitas lygis pasiektas')
    } 
    
    if (playerAnswer11 === correctAnswer11 && playerAnswer12 === correctAnswer12) {
        console.log('abu atsakymai teisingi.')
    } else if (playerAnswer11 !== correctAnswer11 && playerAnswer12 === correctAnswer12){
        console.log(`pirmas atsakymas buvo neteisingas, o antras buvo teisingas.`)
    } else if (playerAnswer12 !== correctAnswer12 && playerAnswer11 === correctAnswer11){
        console.log('antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
    } else if (playerAnswer12 !== correctAnswer12 && playerAnswer11 !== correctAnswer11){
        console.log('abu atsakymai buvo neteisingi.')
    } 
}

level1('suns', 579)




let correctAnswer2 = 'moon'
// let playerAnswer2 = 'moon'

let correctAnswer21 = 56
// let playerAnswer21 = 56

function level2(playerAnswer2, playerAnswer21) {

    if (playerAnswer2 === correctAnswer2 && playerAnswer21 === correctAnswer21) {
        console.log('Patekai i trecia lygi!')
    } else if (playerAnswer2 !== correctAnswer2 && playerAnswer21 === correctAnswer21){
        console.log(`${playerAnswer2} buvo neteisingas, o ${playerAnswer21} buvo teisingas.`)
    } else if (playerAnswer21 !== correctAnswer21 && playerAnswer2 === correctAnswer2){
        console.log(`${playerAnswer21} buvo neteisingas, o ${playerAnswer2} buvo teisingas.`)
    } else if (playerAnswer2 !== correctAnswer2 && playerAnswer21 !== correctAnswer21){
        console.log('abu atsakymai buvo neteisingi.')
    } 
}

level2('moon', 54)





let correctAnswer3 = 'big'
// let playerAnswer3 = 'big'

let correctAnswer4 = 69
// let playerAnswer4 = 69

let correctAnswer5 = true
// let playerAnswer5 = true

function level3 (playerAnswer3, playerAnswer4, playerAnswer5) {

    if ( playerAnswer3 === correctAnswer3 && playerAnswer4 === correctAnswer4 && playerAnswer5 === correctAnswer5) {
        console.log('Perejai trecia lygi!')
    } else if (playerAnswer3 !== correctAnswer3 && playerAnswer4 === correctAnswer4 && playerAnswer5 === correctAnswer5) {
        console.log(`${playerAnswer3} yra neteisingas atsakymas`)
    } else if (playerAnswer3 === correctAnswer3 && playerAnswer4 !== correctAnswer4 && playerAnswer5 === correctAnswer5) {
        console.log(`${playerAnswer4} yra neteisingas atsakymas`)
    } else if (playerAnswer3 === correctAnswer3 && playerAnswer4 === correctAnswer4 && playerAnswer5 !== correctAnswer5) {
        console.log(`${playerAnswer5} yra neteisingas atsakymas`)
    } else if (playerAnswer3 !== correctAnswer3 && playerAnswer4 !== correctAnswer4 && playerAnswer5 === correctAnswer5) {
        console.log(`${playerAnswer5} yra teisingas atsakymas`)
    } else if (playerAnswer3 !== correctAnswer3 && playerAnswer4 === correctAnswer4 && playerAnswer5 !== correctAnswer5) {
        console.log(`${playerAnswer4} yra teisingas atsakymas`)
    } else if (playerAnswer3 === correctAnswer3 && playerAnswer4 !== correctAnswer4 && playerAnswer5 !== correctAnswer5) {
        console.log(`${playerAnswer3} yra teisingas atsakymas`)
    }
}

level3('big', 69, true)






// let isLoggedIn = true
// let userName = 'John'
// let time = 10
// let isBirthday = false

function login(isLoggedIn, userName, time, isBirthday) {

    if (time < 0 || time > 24) {
        console.log('time is wrong')
    } else if (isLoggedIn && time >= 5 && time <= 12 && isBirthday){
        console.log(`Good morning, ${userName} and have a great birthday!`)
    } else if (isLoggedIn && time >= 13 && time <= 18 && isBirthday){
        console.log(`Good Afternoon, ${userName} and have a great birthday!`)
    } else if (isLoggedIn && time >= 19 && isBirthday){
        console.log(`Good Evening, ${userName} and have a great birthday!`)
    } else if (isLoggedIn && time <= 4 && isBirthday){
        console.log(`Good Evening, ${userName} and have a great birthday!`)
    }
    else if (isLoggedIn && time >= 5 && time <= 12){
        console.log(`Good morning, ${userName}.`)
    } else if (isLoggedIn && time >= 13 && time <= 18){
        console.log(`Good Afternoon, ${userName}`)
    } else if (isLoggedIn && time >= 19){
        console.log(`Good Evening, ${userName}`)
    } else if (isLoggedIn && time <= 4){
        console.log(`Good Evening, ${userName}`)
    } else if (isLoggedIn === false) {
        console.log('Good morning')
    }
    else if (isLoggedIn === false && time >= 5 && time <= 12){
        console.log(`Good morning.`)
    } else if (isLoggedIn === false && time >= 13 && time <= 18){
        console.log(`Good Afternoon`)
    } else if (isLoggedIn === false && time >= 19){
        console.log(`Good Evening`)
    } else if (isLoggedIn === false && time <= 4){
        console.log(`Good Evening`)
    }
}

login(true, 'John', 10, true)