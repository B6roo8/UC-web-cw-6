function BMI(weight,height){
    return weight/(height*height)
    
}


console.log(BMI(80.0, 1.80))

function Status(bmi){
    if(bmi<18.5){
        console.log("لديك نقص في الوزن")
        return
    }else if(bmi>=18.5 && bmi<25){
    console.log("وزنك صحي")
    return
    }else if (bmi>=25){
        console.log("لديك زيادة في الوزن")
        return
    }
}


function calculate(){
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    let bmiresult = BMI (weight,height)
    console.log (bmiresult)
    let desc = Status(bmiresult)

   
    

    document.getElementById("result").innerText = desc

    

}
