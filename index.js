let myNumber = document.getElementById('myNumber')
const conversions = document.getElementById('bottomSection')
const btn = document.getElementById('btn')
const constants = [3.280, 0.305, 0.264, 3.785, 0.454, 2.205]

btn.addEventListener("click", render)

function calculateConversions(number, arr){
    return arr.map(num => (number*num).toFixed(2))
}


function render(){
    let inputNumber = myNumber.value
    let newArray = calculateConversions(inputNumber, constants)
        conversions.innerHTML = `
        <div>
        <h3> Length (Meter/Feet)</h3>
            <p> ${inputNumber} m =  ${newArray[0]} ft
            |   ${inputNumber} ft = ${newArray[1]} m
            </p>
            
        <h3>Volume (Liter/Gallon)</h3>
            <p> ${inputNumber} L = ${newArray[2]} gal 
            |   ${inputNumber} gal = ${newArray[3]} L 
            </p>
            
        <h3>Mass (Kilograms/Pounds)</h3>
            <p> ${inputNumber} lbs = ${newArray[4]} kgs 
            |   ${inputNumber} kgs = ${newArray[5]} lbs
            </p>
        </div>`

    }

