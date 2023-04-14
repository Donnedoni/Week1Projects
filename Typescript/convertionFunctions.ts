function poundsToKilogramType( pounds:number): number{
    let kg = pounds* 0.453592;
    return kg;
}
//output for normal function for kilogram
console.log(poundsToKilogramType(5))

//normal function for inches to centimeters
function inchesToCentimetersType(inches:number):number{
    let cm = inches * 2.54;
    return cm;
}
//output for normal function 
console.log(inchesToCentimetersType(1));
  
//normal function
function fahrenheitToCelsiusType(fah : number):number{
    let degreeCelsius=(fah - 32) * 5/9;
    return degreeCelsius;
}
console.log(fahrenheitToCelsiusType(100));

function feetToMetersType(feet:number):number{
    let meters=feet/3.281;
    return meters;
}
console.log(feetToMetersType(1));
// arrow functions of the convertions 

let poundsToKilogramArrow =(pounds:number):number=>{
    let kg =pounds*0.453592;
    return kg;
}

//output for arrow function for kilogram
console.log(poundsToKilogramArrow(5))

//arrow function 
let inchesToCentimetersArrow=(inches:number):number=>{
    let cm = inches * 2.54;
   return cm;
}
console.log(inchesToCentimetersArrow(3));

//arrow function
let fahrenheitToCelsiusArrow=(fah:number):number=>{
    let degreeCelsius=(fah - 32) * 5/9;
    return degreeCelsius;
}
console.log(fahrenheitToCelsiusArrow(43));

let feetToMetersArrow=(feet: number):number=>{
    let meters=feet/3.281;
    return meters;
}
console.log(feetToMetersArrow(1));
