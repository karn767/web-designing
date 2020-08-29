var age = Number(prompt("Enter your age:"));  // STEP 1

// STEP 2
if(age >= 1 && age <= 19){
    alert('You are not a major yet.')
}

// STEP 3
if(age >= 20 && age <= 45){
    alert('You are major, but not senior yet.')
}

// STEP 4
if(age >= 46 && age <= 90){
    alert('You are senior, but not yet retired.')
}
