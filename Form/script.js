function getValue(){
    let firstName = document.getElementById("fname").value;
    let secondName = document.getElementById("sname").value;
    let gender= document.getElementById("gender").value;
    let email=document.getElementById("email").value;


    console.log(`
    First Name: ${firstName}\n 
    Second Name: ${secondName}\n
    Gender: ${gender}\n
    Email: ${email}`
    );
}