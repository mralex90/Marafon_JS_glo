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

    fetch('https://jsonplaceholder.typicode.com/photos1').then(response => {
        if (response.status === 200 || response.status === 201) {
            return response.json()
        } else {
            throw new Error(response.status)
        }
    }).then(data => {
        console.log(data);
    }).catch(error => {
        alert('Произошла ошибка, статус ' + error.message)
    })
})