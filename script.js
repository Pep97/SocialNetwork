

// alert pop-up accedi - registrati

function accedi() {
    var html = `
    <div class="card-body accedi_alert">
        <form action="/accedi" method="post">

    
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInputUsername" name="username" placeholder="myusername" required autofocus>
            <label for="floatingInputUsername">Username</label>
        </div>
    
        <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" name="password" placeholder="Password">
            <label for="floatingPassword">Password</label>
        </div>
    
        <div class="d-grid mb-2">
            <button class="btn btn-lg btn-login fw-bold text-uppercase main-button button_accedi_alert" type="submit">Accedi</button>
        </div>
    
        <a class="d-block text-center mt-2 small color testo_vai_registrati" onclick="registrati()" href="#" onClick>Non hai un account? Registrati</a>
    

        </form>
    </div>
    `;
  
    Swal.fire({
        title: 'Accedi',
        html: html,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false,
    });
}

function registrati(){
    var html = `
        <div class="card-body registrati_alert">
            <form action="/registrati" method="post">

                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInputNome" name="nome" placeholder="Nome" required autofocus>
                    <label for="floatingInputNome">Nome</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInputCognome" name="cognome" placeholder="Cognome" required>
                    <label for="floatingInputCognome">Cognome</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInputUsername" name="username" placeholder="Username" required>
                    <label for="floatingInputUsername">Username</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInputEmail" name="email" placeholder="Email" required>
                    <label for="floatingInputEmail">Email</label>
                </div>

                <hr class="my-2">


                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword" name="password" placeholder="Password" required>
                    <label for="floatingPassword">Password</label>
                </div>

                <div class="d-grid mb-2">
                    <button class="btn btn-lg btn-login fw-bold text-uppercase main-button button_registrati_alert" type="submit">Registrati</button>
                </div>

                <a class="d-block text-center mt-2 small color testo_vai_accedi" href="#" onclick="accedi()">Hai un account? Accedi</a>

            </form>
        </div>
    `;
  
    Swal.fire({
        title: 'Registrati',
        html: html,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false,
    });
}

// Gestione barra di ricerca per cellulare
document.querySelector('#search-button').addEventListener('click', function () {
    var main = document.querySelector('.main');
    main.style.display = 'none';
    
    var navbar = document.querySelector('.navbar-custom');
    navbar.style.display = 'none';

    var searchPanel = document.querySelector('#search-panel');
    searchPanel.style.display = 'flex';

    var containerSearch = document.querySelector('.container-search');
    containerSearch.style.display = 'block';
});

document.getElementById('back-button').addEventListener('click', function () {
    var main = document.getElementsByTagName('main')[0];
    var navbar = document.getElementsByClassName('navbar-custom');
    for (var i = 0; i < navbar.length; i++) {
        navbar[i].style.display = 'flex';
    }
    main.style.display = 'flex;'
    document.getElementById('search-panel').style.display = 'none';
});



// gestione menu laterale

document.getElementsByClassName('mainInterestLink')[0].addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor action
    var hiddenLinks = document.getElementsByClassName('hiddenLinks')[0];
    if (hiddenLinks.style.display === 'none') {
        hiddenLinks.style.display = 'flex';

    } else {
        hiddenLinks.style.display = 'none';
    }

    var arrowIcon = document.getElementsByClassName('arrowIcon1')[0];
    if (arrowIcon.classList.contains('fa-chevron-down')) {
        arrowIcon.classList.remove('fa-chevron-down');
        arrowIcon.classList.add('fa-chevron-up');
    } else {
        arrowIcon.classList.remove('fa-chevron-up');
        arrowIcon.classList.add('fa-chevron-down');
    }


});


//VISUALIZZAZIONE dei post - Panello principale

document.addEventListener("DOMContentLoaded", function () {
    const posts = [
        {
            id: 1,
            user: "Mario Rossi",
            content: "Questo e' il mio post",
            imageUrl: "https://via.placeholder.com/600x400",
            profileImage: "https://via.placeholder.com/40",
            postDate: "2024-06-26"
        },
        {
            id: 2,
            user: "Samatha Verdi",
            content: "Questo e' il mio post",
            imageUrl: "https://via.placeholder.com/600x400",
            profileImage: "https://via.placeholder.com/40",
            postDate: "2024-06-25"
        },
        {
            id: 3,
            user: "Barack Obama",
            content: "Questo e' il mio post",
            imageUrl: "https://via.placeholder.com/600x400",
            profileImage: "https://via.placeholder.com/40",
            postDate: "2024-06-24"
        }
    ];

    const postContainer = document.getElementById("post-container");

    posts.forEach(post => {

        const postElement = document.createElement('div');
        postElement.innerHTML = `
        <div class="post col-md-6 offset-md-3">
            <div class="post-header">
                <img src="${post.profileImage}" alt="${post.user}'s profile picture">
                <div class="user-info">
                <span class="username">${post.user}</span>
                <span class="post-date">${post.postDate}</span>
                </div>
            </div>
            <p>${post.content}</p>
            <img src="${post.imageUrl}" alt="Post image">
            <div class="post-footer">
                <button onclick="registrati()"><i class="fas fa-thumbs-up"></i> Like</button>
                <button onclick="registrati()"><i class="fas fa-thumbs-down"></i> Dislike</button>
                <button class="comment-btn" onclick="registrati()"><i class="fas fa-comment"></i> Comment</button>
                <button onclick="registrati()"><i class="fas fa-share"></i> Share</button>
            </div>
        </div>
    
    `;

        postContainer.appendChild(postElement);
    });
});

function likePost(postId) {
    console.log(`Liked post with id: ${postId}`);
    // Aggiungere la logica 
}

function dislikePost(postId) {
    console.log(`Disliked post with id: ${postId}`);
    // Aggiungere la logica
}

function sharePost(postId) {
    console.log(`Shared post with id: ${postId}`);
    // Aggiungere la logica 
}

function commentPost(postId) {
    console.log(`Commented on post with id: ${postId}`);
    // Aggiungerela logica
}

//VISUALIZZAZIONE dei post - Panello Interesse

function visualizzazione_pagina_interesse(){
    var postContainer = document.getElementById('post-container');
    var containerInteresse = document.getElementById('container-interesse');

    postContainer.style.display = 'none';
    containerInteresse.style.display = 'block';

    // visualizzazione pannello dei post

    var panelloPost = document.querySelector('.pannello_post');
    var panelloGruppi = document.querySelector('.pannello_gruppi');
    var panelloEventi = document.querySelector('.pannello_eventi');

    panelloPost.style.display = 'block';
    panelloGruppi.style.display = 'none';
    panelloEventi.style.display = 'none';



    // creazione dei post

    const posts = [
        {
            id: 1,
            user: "Mario Rossi",
            content: "Questo e' il mio post",
            imageUrl: "https://via.placeholder.com/600x400",
            profileImage: "https://via.placeholder.com/40",
            postDate: "2024-06-26"
        },
        {
            id: 2,
            user: "Samatha Verdi",
            content: "Questo e' il mio post",
            imageUrl: "https://via.placeholder.com/600x400",
            profileImage: "https://via.placeholder.com/40",
            postDate: "2024-06-25"
        },
        {
            id: 3,
            user: "Barack Obama",
            content: "Questo e' il mio post",
            imageUrl: "https://via.placeholder.com/600x400",
            profileImage: "https://via.placeholder.com/40",
            postDate: "2024-06-24"
        }
    ];

    const postContainer1 = document.querySelector(".pannello_post");

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
        <div class="post col-md-6 offset-md-3 pannello_post">
            <div class="post-header">
                <img src="${post.profileImage}" alt="${post.user}'s profile picture">
                <div class="user-info">
                <span class="username">${post.user}</span>
                <span class="post-date">${post.postDate}</span>
                </div>
            </div>
            <p>${post.content}</p>
            <img src="${post.imageUrl}" alt="Post image">
            <div class="post-footer">
                <button onclick="registrati()"><i class="fas fa-thumbs-up"></i> Like</button>
                <button onclick="registrati()"><i class="fas fa-thumbs-down"></i> Dislike</button>
                <button class="comment-btn" onclick="registrati()"><i class="fas fa-comment"></i> Comment</button>
                <button onclick="registrati()"><i class="fas fa-share"></i> Share</button>
            </div>
        </div>
        `;

        postContainer1.appendChild(postElement);
    });

    // creazione dei gruppi


    // creazione degli eventi


}


function post_panel(){
    var panelloPost = document.querySelector('.pannello_post');
    var panelloGruppi = document.querySelector('.pannello_gruppi');
    var panelloEventi = document.querySelector('.pannello_eventi');

    panelloPost.style.display = 'block';
    panelloGruppi.style.display = 'none';
    panelloEventi.style.display = 'none';

    // il contenuto dei posto é giá stato caricato in visualizzazione_pagina_interesse()
}

function gruppi_panel(){
    var panelloPost = document.querySelector('.pannello_post');
    var panelloGruppi = document.querySelector('.pannello_gruppi');
    var panelloEventi = document.querySelector('.pannello_eventi');

    panelloPost.style.display = 'none';
    panelloGruppi.style.display = 'block';
    panelloEventi.style.display = 'none';

}

function eventi_panel(){
    var panelloPost = document.querySelector('.pannello_post');
    var panelloGruppi = document.querySelector('.pannello_gruppi');
    var panelloEventi = document.querySelector('.pannello_eventi');

    panelloPost.style.display = 'none';
    panelloGruppi.style.display = 'none';
    panelloEventi.style.display = 'block';

}

// generazione di un post quando l'utente raggiunge 80% della pagina 

window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    const threshold = totalHeight * 0.8;
  
    if (currentScroll >= threshold) {
      generatePost(); // Call your function to generate a post

    }
  });
  
function generatePost() {

console.log('Generating a post...'); // Placeholder for actual post generation logic

// post generato

const posts = [
    {
        id: 1,
        user: "Mario Rossi",
        content: "Questo e' il mio post",
        imageUrl: "https://via.placeholder.com/600x400",
        profileImage: "https://via.placeholder.com/40",
        postDate: "2024-06-26"
    },
    {
        id: 2,
        user: "Samatha Verdi",
        content: "Questo e' il mio post",
        imageUrl: "https://via.placeholder.com/600x400",
        profileImage: "https://via.placeholder.com/40",
        postDate: "2024-06-25"
    },
    {
        id: 3,
        user: "Barack Obama",
        content: "Questo e' il mio post",
        imageUrl: "https://via.placeholder.com/600x400",
        profileImage: "https://via.placeholder.com/40",
        postDate: "2024-06-24"
    }
];

const postContainer = document.getElementById("post-container");

posts.forEach(post => {

    const postElement = document.createElement('div');
    postElement.innerHTML = `
    <div class="post col-md-6 offset-md-3">
        <div class="post-header">
            <img src="${post.profileImage}" alt="${post.user}'s profile picture">
            <div class="user-info">
            <span class="username">${post.user}</span>
            <span class="post-date">${post.postDate}</span>
            </div>
        </div>
        <p>${post.content}</p>
        <img src="${post.imageUrl}" alt="Post image">
        <div class="post-footer">
            <button onclick="likePost(${post.id})"><i class="fas fa-thumbs-up"></i> Like</button>
            <button onclick="dislikePost(${post.id})"><i class="fas fa-thumbs-down"></i> Dislike</button>
            <button class="comment-btn" onclick="commentPost(${post.id})"><i class="fas fa-comment"></i> Comment</button>
            <button onclick="sharePost(${post.id})"><i class="fas fa-share"></i> Share</button>
        </div>
    </div>

`;

    postContainer.appendChild(postElement);
});

}