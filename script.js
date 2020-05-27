let greeting_box = document.querySelector('.greeting__box')
let keys = greeting_box.querySelector('.keys')
let display = document.querySelector('.display')

function getInputValue(){
  // Selecting the input element and get its value 
  let inputVal = document.getElementById("name").value;
  return(inputVal);
}

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    let key = e.target 
    let action = key.dataset.action
    let keyContent = key.textContent
    let displayedGreet = display.textContent
    let previousKeyType = greeting_box.dataset.previousKeyType

    if (!action) {
        console.log('name key!')
        name = key.textContent
        greeting_box.dataset.previousKeyType = 'name' 
    }

    if (action === 'hello') {
        console.log('hello key!')
        if (previousKeyType === 'name'){
          display.textContent = "Hello " + name
        }
        greeting_box.dataset.previousKeyType = 'hello' 
    }
    if (action === 'goodbye') {
        console.log('goodbye key!')
        if (previousKeyType === 'hello'){
            display.textContent = "Goodbye " + name
            greeting_box.querySelector('[data-action=goodbye]').textContent = "Clear"
        } else if (previousKeyType === 'goodbye') {
            display.textContent = ""
            name = ""
            document.getElementById("name").value = "";
            greeting_box.dataset.previousKeyType = ""
            greeting_box.querySelector('[data-action=goodbye]').textContent = "Goodbye"
        } 
        greeting_box.dataset.previousKeyType = 'goodbye' 
    }

    if (action === 'name') {
      console.log('Input name!')
      name = getInputValue();
      console.log(name)
      greeting_box.dataset.previousKeyType = 'name' 
      }
  }  
})

