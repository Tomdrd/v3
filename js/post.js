function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}
   //COMPARTILHE
   function shareWhatsApp() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Confira este site incrível!");
    window.open(`https://api.whatsapp.com/send?text=${text} ${url}`, '_blank');
}

function shareFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

function shareEmail() {
    const subject = encodeURIComponent("Confira este site incrível!");
    const body = encodeURIComponent(`Dê uma olhada neste site: ${window.location.href}`);
    window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
}

function shareTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Confira este site incrível!");
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");

    fetch("posts.json")
        .then(response => response.json())
        .then(posts => {
            let post = posts.find(p => p.slug === slug);
            if (post) {
                document.getElementById("post-container").innerHTML = `
                    <h1>${post.titulo}</h1>
                    <p class="post-date">${post.data}</p> <!-- Adicionada a classe post-date -->
                    <img src="${post.imagem}" alt="${post.titulo}">
                    <p>${post.conteudo}</p>
                `;
            } else {
                document.getElementById("post-container").innerHTML = "<p>Post não encontrado.</p>";
            }
        })
        .catch(error => console.error("Erro ao carregar o post:", error));
});