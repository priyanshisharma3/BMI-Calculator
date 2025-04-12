const form = document.querySelector('form')

const under = document.querySelector('#under')
const normal = document.querySelector('#normal')
const over = document.querySelector('#over')

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result')
    

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Pls enter valid height (${height})`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Pls enter valid weight (${weight})`;
    }
    else{
        const bmi = (weight / ((height * height)/10000)).toFixed(2);
        result.innerHTML = `<span id="finalRes">${bmi}</span>`
    }
    console.log(result);
    let resultText = document.querySelector('#finalRes').textContent

    under.style.color = "black";
    normal.style.color = "black";
    over.style.color = "black";

    if(Number(resultText) > 0 && Number(resultText) < 18.6){
        under.style.color = "blue"
        console.log("firstif");
    }
    else if(Number(resultText) >= 18.6 && Number(resultText) < 24.9){
        normal.style.color = "green"
        console.log("secondif");
    }
    else if(Number(resultText) >= 24.9){
        over.style.color = "red"
        console.log("thirdif");
    }
})