
const listElement = document.querySelector('.posts')
const postTemplate = document.getElementById('single-post');

function sendHttpRequest(method, url) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        //configure get request
        xhr.open(method, url);

        xhr.responseType = 'json'

        xhr.onload = function () {
            resolve(xhr.response)
            // const listOfPost = JSON.parse(xhr.response)
            const listOfPost = xhr.response
            for (const post of listOfPost) {
                const postEl = document.importNode(postTemplate.content, true);
                postEl.querySelector('h2').textContent = post.title.toUpperCase();
                postEl.querySelector('p').textContent = post.body;
                listElement.append(postEl);
            }
        }
        xhr.send();
    });
    return promise;
}


async function fetchPosts(){
   const responseData = await sendHttpRequest(
       'GET', 
       "https://jsonplaceholder.typicode.com/posts");

        const listOfPost = responseData;
        for (const post of listOfPost) {
            const postEl = document.importNode(postTemplate.content, true);
            postEl.querySelector('h2').textContent = post.title.toUpperCase();
            postEl.querySelector('p').textContent = post.body;
            listElement.append(postEl);
        }
    }

    fetchPosts()





