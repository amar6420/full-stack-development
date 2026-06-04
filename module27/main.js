function showmessage(){
    alert('this is my first function')
}
showmessage()

function sum(numri1, numri2){
    return numri1 + numri2
}

console.log(sum(32,42))

function toCelsius(Farhenheit){
    return (5 / 9) * (Farhenheit - 32);
}

var result = toCelsius(54);
console.log("Farhenheit in celcius is " + result + " degrees")

function digitalschool(){
    var shkolla = "DigitalSchool";
    alert(shkolla);
}

digitalschool()

function siperfaqja_e_trekendeshit(baza, lartesia){
    return baza * lartesia * 0.5;
}



console.log('Siperfaqja e trekendeshit eshte: ' + siperfaqja_e_trekendeshit(5,7));

var audia = {
    type: 'A6',
    color: 'White',
    viti_i_pordhimit: 2016,
    karburanti: 'Benzine',
    engine:function(){
        alert('vroom');
    },
    get getkilometra() {
    return this.kilometra;
},

set setkilometra(km) {
    this.kilometra = km;
}

}

alert(audia.type)

var grupi_7 = {
    niveli: 'Web Adv',
    ora: '19:30',
    nr_nx: 14
}

alert(grupi_7.nr_nx)

audia.engine()
console.log(audia.getkilometra)
audia.setkilometra = 120;
console.log(audia.getkilometra)


var helsinki = {
    people: '694 000',
    area_km2: '715km2',
    country: 'finland',
    language: 'finnish',

    showInfo:function() {
        alert('Helsinki has this many'.people);
    }
}
alert(helsinki.area_km2)
helsinki.showInfo()









/*function  sum(numri1, numri2){
    return numri1 + numri2
}


function  minus(numri1, numri2){
    return numri1 - numri2
}

function  times(numri1, numri2){
    return numri1 x numri2
}

function  divide(numri1, numri2){
    return numri1 / numri2
}
sum(10,20)*/