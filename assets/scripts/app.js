const xhr = new XMLHttpRequest();
const listElement = document.querySelector('.posts')
const postTemplate = document.getElementById('single-post');


//configure get request
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

xhr.responseType = 'json'

xhr.onload = function() {
    // const listOfPost = JSON.parse(xhr.response)
    const listOfPost = xhr.response
    console.log(listOfPost);

    for(const post of listOfPost) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent=post.title.toUpperCase();
        postEl.querySelector('p').textContent=post.body;
        listElement.append(postEl);
    }
    
}

xhr.send();



