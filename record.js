fetch('https://api.example.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title: 'My Post', content: 'Hello, world!' })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));


