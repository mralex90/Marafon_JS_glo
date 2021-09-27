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

    fetch('https://jsonplaceholder.typicode.com/photos').then(response => {
        if (response.status === 200) {
            return response.json()
        }
    }).then(data => {
        console.log(data);
    })
})