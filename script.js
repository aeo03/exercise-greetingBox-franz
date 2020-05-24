let greeting_box = document.querySelector('.greeting__box')
let keys = greeting_box.querySelector('.keys')
let display = document.querySelector('.display')

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
            greeting_box.dataset.previousKeyType = ""
            greeting_box.querySelector('[data-action=goodbye]').textContent = "Goodbye"
        } 
        greeting_box.dataset.previousKeyType = 'goodbye'  
    }    
  }  
})

