const url = "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20";
const loadingElement = document.querySelector("#loading");
const postsContainer = document.querySelector("#posts-container"); 

async function carregarPosts() {
    const response = await fetch(url)
    const posts = await response.json();

    loadingElement.style.display = "none";

    posts.map(post => {
        const div = document.createElement("div");
        const title = document.createElement("h2");
        const body = document.createElement("p");

        title.innerText = post.title;
        body.innerText  = post.body;

        div.appendChild(title);
        div.appendChild(body); 

        postsContainer.appendChild(div);
    })

} 
carregarPosts();
