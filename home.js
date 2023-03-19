let postPage = 1;
let postLimit = 20;
const loadingElement = document.querySelector("#loading");
const postsContainer = document.querySelector("#posts-container"); 
const buttonLoading = document.querySelector("#button-loading");

async function carregarPosts() {
    const url = `https://jsonplaceholder.typicode.com/posts?_page=${postPage}&_limit=${postLimit}`;
    const response = await fetch(url);
    const posts = await response.json();

    loadingElement.style.display = "none";

    posts.map(post => {
        const div = document.createElement("div");
        const title = document.createElement("h2");
        const body = document.createElement("p");
        const buttonDetailPost = document.createElement("button");

        title.innerText = post.title;
        body.innerText  = post.body;
        buttonDetailPost.innerText = "Detalhes do Post";
        buttonDetailPost.setAttribute("onclick",`detalhesDoPost(${post.id})`);

        div.appendChild(title);
        div.appendChild(body); 
        div.appendChild(buttonDetailPost);
        postsContainer.appendChild(div);
    })
    mostrarBotaoCarregarMais(posts);

} 

function mostrarBotaoCarregarMais(posts) {
    if(temMaisPosts(posts)) {
        buttonLoading.style.display = "block";
        postPage++;        
    } else {
        buttonLoading.style.display = "none";
    }
}

function temMaisPosts(posts) {
    return posts.length === postLimit;
}

async function detalhesDoPost(postId) {
    let url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
    const response = await fetch(url);
    const detailsPost = await response.json();
    console.log(detailsPost);
}

carregarPosts();
