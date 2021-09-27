const form = document.querySelector('.form-test-drive')
// 'https://jsonplaceholder.typicode.com'
form.addEventListener('submit', (event) => {
    event.preventDefault()

    let data ={}

    for(let {name, value} of form.elements) {
        if (name) {  
            data[name] = value
        }
    }

    fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
        console.log(response);
    })
})