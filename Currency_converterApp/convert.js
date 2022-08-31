const button = document.getElementById('btn')
const select = document.querySelectorAll('select')
const input = document.querySelector('.inp')
const result = document.getElementById('value')


  
  fetch('http://api.frankfurter.app/currencies')
  .then((response) => response.json())
  .then((response) => {
   display (response)
    
  })
  
  function display(response){
     const details = Object.entries(response)
     for(i=0; i<details.length; i++){
      select[0].innerHTML += `<option value='${details[i]}'>${details[i]}</option>`
      select[1].innerHTML += `<option value='${details[i]}'>${details[i]}</option>`
     }

  }
  button.addEventListener('click',function(event){
    let currency1 = select[0].value
    let currency2 = select[1].value
    let insert = input.value

    if(currency1 != currency2){
      convert(currency1.currency2,insert)
    }
    else{
      alert('Select different currrencies')
    }
  })

  function convert(currency1,currency2,insert){
    const host = 'api.frankfurter.app'
    fetch(
      `https://${host}/latest?amount=${insert}&from=${currency1}&to=${currency2}`
    )

    .then((lest) => lest.json())
    .then((lest) =>{
      console.log( Object.values(lest)) 
       result.innerHTML =  Object.values(lest)                                                                     
    } )
  }