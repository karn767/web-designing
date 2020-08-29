var age = Number(prompt("Enter your age:"));  // STEP 1

if(age >= 1 && age <= 17){
    alert('You are not a major yet.')
}

if(age >= 18 && age <= 49){
    alert('You are major, but not senior yet.')
}

if(age >= 50 && age <= 64){
    alert('You are senior, but not yet retired.')
}