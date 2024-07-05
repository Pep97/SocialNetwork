
// click humburger menu nella custom-navbar
document.querySelector('.hamburger-menu').addEventListener('click', function () {
    var sidebar = document.querySelector('.sidebar');
    var zIndex = window.getComputedStyle(sidebar).getPropertyValue('z-index');
    // perché zIndex viene preso cosí? perché se si usa sidebar.style.zIndex non funziona
    // e al primo click ti ritorna una stringa vuota.
    
    if (zIndex === '-1') {
        sidebar.style.zIndex = '2';
    } else {
        sidebar.style.zIndex = '-1';
    }
});


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


document.querySelector('#search-button').addEventListener('click', function () {

    var searchPanel = document.getElementById('search-panel');
    searchPanel.style.zIndex = '1000';
    document.body.style.overflow = 'hidden'; // Disable scrolling

});

document.getElementById('back-button').addEventListener('click', function () {
    var searchPanel = document.getElementById('search-panel');
    searchPanel.style.zIndex = '-1';
    document.body.style.overflow = 'visible';
});

// Funzione per gestire la z-index del pannello di ricerca in base alla dimensione della finestra
function adjustSearchPanelZIndex() {
    const searchPanel = document.querySelector('.search-panel');
    if (window.innerWidth > 768) {
      searchPanel.style.zIndex = '-1';
    } 
  }

// controllo della dimensione della finestra per chiamare adjustSearchPanelZIndex
window.addEventListener('resize', adjustSearchPanelZIndex);




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
        },
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
                <button><i class="fas fa-thumbs-up"></i>23</button>
                <button><i class="fas fa-thumbs-down"></i>2</button>
                <button class="comment-btn"><i class="fas fa-comment"></i>3</button>
                <button><i class="fas fa-share"></i>1</button>
            </div>
        </div>
    `;

    // evenListener per gestire i click nel post
    postElement.addEventListener('click', function(event){

        const button = event.target.closest('button');
        const likeClicked = button && button.querySelector('.fa-thumbs-up');

        if (likeClicked) {
            registrati();
            return;
        }

        const dislikeClicked = button && button.querySelector('.fa-thumbs-down');

        if (dislikeClicked) {
            registrati();
            return;
        };
        
        const commentClicked = button && button.querySelector('.fa-comment');

        if (commentClicked) {
            registrati();
            return;
        };

        const shareClicked = button && button.querySelector('.fa-share');

        if (shareClicked) {
            registrati();
            return;
        };

        const postElement = event.target.closest('.post');

        if (postElement) {
            callViewSinglePost(post);
            
        }

    });

    // aggiunta postElement per visualizzare il post intero
    postContainer.appendChild(postElement);
    });
});

//VISUALIZZAZIONE dei post - Panello Interesse

function visualizzazione_pagina_interesse(interesse){


    var postContainer = document.getElementById('post-container');
    var containerInteresse = document.getElementById('container-interesse');

    var interesseAttivo = document.querySelector('.interesse-attivo');

    // reset dei post per gli interessi
    if (containerInteresse.style.display === 'block') {

        if (interesseAttivo.textContent.toLocaleLowerCase() === interesse.toLocaleLowerCase()) {
            console.log("Non fare nulla");
            return; // Non fare nulla se l'interesse attivo é lo stesso -> non genera nuovi post
        } else {
            containerInteresse.querySelectorAll('.post').forEach(post => post.remove());
            console.log("Reset post per interesse attivo");
        }
        
    } 

    // Applica interesse attivo nella pagina
    interesseAttivo.textContent = interesse;
    console.log("interesse attivo: " + interesseAttivo.textContent);


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
            postDate: "2024-06-26",
            interesse: "html",

        },
        {
            id: 2,
            user: "Samatha Verdi",
            content: "Questo e' il mio post",
            imageUrl: "https://via.placeholder.com/600x400",
            profileImage: "https://via.placeholder.com/40",
            postDate: "2024-06-25",
            interesse: "css"
        },
        {
            id: 3,
            user: "Barack Obama",
            content: "Questo e' il mio post",
            imageUrl: "https://via.placeholder.com/600x400",
            profileImage: "https://via.placeholder.com/40",
            postDate: "2024-06-24",
            interesse: "javascript"
        }
    ];

    const postContainer1 = document.querySelector(".pannello_post");

    posts.forEach(post => {

        if (post.interesse !== interesse) {
            return;
        }

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
                <button><i class="fas fa-thumbs-up"></i>23</button>
                <button><i class="fas fa-thumbs-down"></i>2</button>
                <button class="comment-btn"><i class="fas fa-comment"></i>3</button>
                <button><i class="fas fa-share"></i>1</button>
            </div>
        </div>
        `;

        // evenListener per gestire i click nel post
        postElement.addEventListener('click', function(event){

            const button = event.target.closest('button');
            const likeClicked = button && button.querySelector('.fa-thumbs-up');

            if (likeClicked) {
                registrati();
                return;
            }

            const dislikeClicked = button && button.querySelector('.fa-thumbs-down');

            if (dislikeClicked) {
                registrati();
                return;
            };
            
            const commentClicked = button && button.querySelector('.fa-comment');

            if (commentClicked) {
                registrati();
                return;
            };

            const shareClicked = button && button.querySelector('.fa-share');

            if (shareClicked) {
                registrati();
                return;
            };

            const postElement = event.target.closest('.post');

            if (postElement) {
                callViewSinglePost(post);
                
            }

        });

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
        // console.log('User reached 80% of the page');
        const pannelloPrincipale = document.getElementById("post-container");
        const panelloInteressi = document.getElementById("container-interesse");



        if (pannelloPrincipale.style.display !== 'none') {
            generaPost(pannelloPrincipale);
        } else if (panelloInteressi.style.display !== 'none') {

            const interesse = document.querySelector('.interesse-attivo').textContent.toLowerCase();
            console.log(interesse);
            const pannelloPost = document.querySelector('.pannello_post');
            const pannelloGruppi = document.querySelector('.pannello_gruppi');
            const pannelloEventi = document.querySelector('.pannello_eventi');

            if (pannelloPost.style.display !== 'none') {
                generaPostInteresse(pannelloPost, interesse);
            } else if (pannelloGruppi.style.display !== 'none') {
                // generaGruppi(pannelloGruppi);
            } else if (pannelloEventi.style.display !== 'none') {
                // generaEventi(pannelloEventi);
            }

        }
    }
});

// funzione per generare nuovi post quando l'utente scrolla

function generaPost(pannello){

    // console.log('Generating a post...');
    // post generato

    const posts = [
        {
            id: 1,
            user: "Mario Rossi",
            content: "Questo e' il mio post",
            imageUrl: "https://via.placeholder.com/600x400",
            profileImage: "https://via.placeholder.com/40",
            postDate: "2024-06-26",
            interesse: "html"
        },
        {
            id: 2,
            user: "Samatha Verdi",
            content: "Questo e' il mio post",
            imageUrl: "https://via.placeholder.com/600x400",
            profileImage: "https://via.placeholder.com/40",
            postDate: "2024-06-25",
            interesse: "css"
        },
        {
            id: 3,
            user: "Barack Obama",
            content: "Questo e' il mio post",
            imageUrl: "https://via.placeholder.com/600x400",
            profileImage: "https://via.placeholder.com/40",
            postDate: "2024-06-24",
            interesse: "javascript"
        }
    ];



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
            <button><i class="fas fa-thumbs-up"></i>23</button>
            <button><i class="fas fa-thumbs-down"></i>2</button>
            <button class="comment-btn"><i class="fas fa-comment"></i>3</button>
            <button><i class="fas fa-share"></i>1</button>
        </div>
    </div>
    `;

    // evenListener per gestire i click nel post
    postElement.addEventListener('click', function(event){

        const button = event.target.closest('button');
        const likeClicked = button && button.querySelector('.fa-thumbs-up');

        if (likeClicked) {
            registrati();
            return;
        }

        const dislikeClicked = button && button.querySelector('.fa-thumbs-down');

        if (dislikeClicked) {
            registrati();
            return;
        };
        
        const commentClicked = button && button.querySelector('.fa-comment');

        if (commentClicked) {
            registrati();
            return;
        };

        const shareClicked = button && button.querySelector('.fa-share');

        if (shareClicked) {
            registrati();
            return;
        };

        const postElement = event.target.closest('.post');

        if (postElement) {
            callViewSinglePost(post);
            
        }

    });

    pannello.appendChild(postElement);
    });
}

// funzione per generare nuovi post quando l'utente scrolla per interesse specifico


function generaPostInteresse(pannello, interesse){

    // console.log('Generating a post...');
    // post generato

    const posts = [
        {
            id: 1,
            user: "Mario Rossi",
            content: "Questo e' il mio post",
            imageUrl: "https://via.placeholder.com/600x400",
            profileImage: "https://via.placeholder.com/40",
            postDate: "2024-06-26",
            interesse: "html"
        },
        {
            id: 2,
            user: "Samatha Verdi",
            content: "Questo e' il mio post",
            imageUrl: "https://via.placeholder.com/600x400",
            profileImage: "https://via.placeholder.com/40",
            postDate: "2024-06-25",
            interesse: "css"
        },
        {
            id: 3,
            user: "Barack Obama",
            content: "Questo e' il mio post",
            imageUrl: "https://via.placeholder.com/600x400",
            profileImage: "https://via.placeholder.com/40",
            postDate: "2024-06-24",
            interesse: "javascript"
        }
    ];



    posts.forEach(post => {

        if (post.interesse !== interesse) {
            return;
        }

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
                <button><i class="fas fa-thumbs-up"></i>23</button>
                <button><i class="fas fa-thumbs-down"></i>2</button>
                <button class="comment-btn"><i class="fas fa-comment"></i>3</button>
                <button><i class="fas fa-share"></i>1</button>
            </div>
        </div>
        `;

        // evenListener per gestire i click nel post
        postElement.addEventListener('click', function(event){

            const button = event.target.closest('button');
            const likeClicked = button && button.querySelector('.fa-thumbs-up');

            if (likeClicked) {
                registrati();
                return;
            }

            const dislikeClicked = button && button.querySelector('.fa-thumbs-down');

            if (dislikeClicked) {
                registrati();
                return;
            };
            
            const commentClicked = button && button.querySelector('.fa-comment');

            if (commentClicked) {
                registrati();
                return;
            };

            const shareClicked = button && button.querySelector('.fa-share');

            if (shareClicked) {
                registrati();
                return;
            };

            const postElement = event.target.closest('.post');

            if (postElement) {
                callViewSinglePost(post);
                
            }

        });

    pannello.appendChild(postElement);
    });
}

//-------------------------------------------

// VISUALIZZAZIONE di un singolo post

let currentPanel = null;

function callViewSinglePost(post) {
    const postContainer = document.getElementById('post-container');
    const postContainerInteresse = document.getElementById('container-interesse');

    // Capisci il pannello in cui si trova l'utente
    if (postContainer.style.display !== 'none') {
        currentPanel = postContainer;
        viewSinglePost(post, postContainer);
    } else if (postContainerInteresse.style.display !== 'none') {
        currentPanel = postContainerInteresse;
        viewSinglePost(post, postContainerInteresse);
    }
}

function viewSinglePost(post, pannello) {

    // fai scattare la funzione nel pannello specifico
    const containerPostInterno = document.getElementById('container-post-interno');

    //pulizia del contenitore del post interno
    containerPostInterno.innerHTML = '';

    //creazione di commenti placeholder
    const comments = [
        {
            id: 1,
            user: "Giulia Bianchi",
            content: "Questo è il mio commento.",
            profileImage: "https://via.placeholder.com/40",
            commentDate: "2024-06-27"
        },
        {
            id: 2,
            user: "Marco Neri",
            content: "Sono d'accordo con te!",
            profileImage: "https://via.placeholder.com/40",
            commentDate: "2024-06-27"
        },
    ];

    const postElement = document.createElement('div');
    postElement.innerHTML = `
    <div class="post col-md-6 offset-md-3">
        <div class="post-header">
        <div id="back-arrow" onclick="goBackToPosts()"><i class="fas fa-arrow-left"></i></div>
            <img src="${post.profileImage}" alt="${post.user}'s profile picture">
            <div class="user-info">
            <span class="username">${post.user}</span>
            <span class="post-date">${post.postDate}</span>
            </div>
        </div>
        <p>${post.content}</p>
        <img src="${post.imageUrl}" alt="Post image">
        <div class="post-footer">
                <button onclick="registrati()"><i class="fas fa-thumbs-up"></i>23</button>
                <button onclick="registrati()"><i class="fas fa-thumbs-down"></i>2</button>
                <button class="comment-btn" onclick="registrati()"><i class="fas fa-comment"></i>3</button>
                <button onclick="registrati()"><i class="fas fa-share"></i>1</button>
        </div>
        <div class="post-comment mt-2">
            <form class="form-group">
                <textarea class="textarea" rows="3" placeholder="Scrivi un commento..."></textarea>
                <div class="bottoni-comment">
                    <button type="button" class="cancel-btn" onclick="cancelComment()">Cancel</button>
                    <button type="submit" class="commenta-btn">Commenta</button>
                </div>
            </form>
        </div>
        <div>
         <div class="comments-section">

         
            ${comments.map(comment => `
            <div class="comment">
                <img src="${comment.profileImage}" alt="${comment.user}'s profile picture" class="comment-profile-img">
                <div class="comment-content">
                    <div class="comment-header">
                        <span class="comment-username">${comment.user}</span>
                        <span class="comment-date">${comment.commentDate}</span>
                    </div>
                    <p>${comment.content}</p>
                </div>
            </div>
            `).join('')}
        </div>
    </div>
    `;

    //aggiunta del post al contenitore del post interno
    containerPostInterno.appendChild(postElement);

    // nascondi il pannello principale e mostra il pannello interno
    pannello.style.display = 'none';
    containerPostInterno.style.display = 'block';

}

function cancelComment() {
    document.querySelector('.post-comment form textarea').value = '';
}

function goBackToPosts() {

    const containerPostInterno = document.getElementById('container-post-interno');

    if (containerPostInterno.style.display !== 'none') {
        containerPostInterno.style.display = 'none';
        currentPanel.style.display = 'block';
    }
}
