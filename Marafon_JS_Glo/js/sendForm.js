const form = document.querySelector('.form-test-drive')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    for(let {name, value} of form.elements) {
        
        if (name) {  
            console.dir(value);
        }
    }
})