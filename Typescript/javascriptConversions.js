//normal function for pounds to kilogram
function poundsToKilogram(pounds){
    let kg = pounds* 0.453592;
    return kg;
}

//output for normal function for kilogram
console.log(poundsToKilogram(5))
//Arrow function for pounds to kilogram

poundsToKilogramArrow =(pounds)=>{
    let kg =pounds*0.453592;
    return kg;
}

//output for arrow function for kilogram
console.log(poundsToKilogramArrow(5))

//normal function for inches to centimeters
function inchesToCentimeters(inches){
    let cm = inches * 2.54;
    return cm;
}
//output for normal function 
console.log(inchesToCentimeters(1));

//arrow function 
inchesToCentimetersArrow=(inches)=>{
     let cm = inches * 2.54;
    return cm;
}
console.log(inchesToCentimeters(3));


//normal function
function fahrenheitToCelsius(fah){
    let degreeCelsius=(fah - 32) * 5/9;
    return degreeCelsius;
}
console.log(fahrenheitToCelsius(30));

//arrow function
fahrenheitToCelsiusArrow=(fah)=>{
    let degreeCelsius=(fah - 32) * 5/9;
    return degreeCelsius;
}
console.log(fahrenheitToCelsiusArrow(43));

function feetToMeters(feet){
    let meters=feet/3.281;
    return meters;
}
console.log(feetToMeters(1));

feetToMetersArrow=(feet)=>{
    let meters=feet/3.281;
    return meters;
}
console.log(feetToMetersArrow(1));