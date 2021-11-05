// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// nome autore,
// foto profilo,
// data,
// testo del post,
// immagine
// numero di likes.

const socialFeed = [
    {
        "postAuthorName": "Phil Mangione",
        "postAuthorPic": "https://unsplash.it/300/300?image=15",
        "postData": "4 mesi fa",
        "postText": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "postPhoto": "https://unsplash.it/300/300?image=171",
        "postLikes": "80"
    },
    {
        "postAuthorName": "Ajeje Brazorf",
        "postAuthorPic": "https://unsplash.it/300/300?image=16",
        "postData": "1 mese fa",
        "postText": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "postLikes": "65"
    },
    {
        "postAuthorName": "Alfa Beta",
        "postAuthorPic": "https://unsplash.it/300/300?image=17",
        "postData": "1 mese fa",
        "postText": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "postPhoto": "https://unsplash.it/300/300?image=172",
        "postLikes": "65"
    },
    {
        "postAuthorName": "Delta Gamma",
        "postAuthorPic": "https://unsplash.it/300/300?image=18",
        "postData": "2 settimane fa",
        "postText": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "postPhoto": "https://unsplash.it/300/300?image=173",
        "postLikes": "55"
    },
    {
        "postAuthorName": "Epsilon Zeta",
        "postAuthorPic": "https://unsplash.it/300/300?image=19",
        "postData": "33 minuti fa",
        "postText": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "postLikes": "12"
    }
];

console.log(socialFeed);

// (non tutti i post devono avere una immagine) [quindi gestisco il caso],
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// dichiaro la costante per selezionare l'html su cui voglio stampare
const postList = document.querySelector(".posts-list");

// Creo un ciclo che fino a quando trova elementi dentro l'array stampa nell'html la struttura con all'interno i valori presi
for (let i = 0; i < socialFeed.length; i++) {
    // destructuring dell'array per salvarmi delle variabili corrispondenti al valore dei vari oggetti (ad ogni iterazione prende l'oggetto successivo nell'array)
    const {postAuthorName, postAuthorPic, postData, postText, postPhoto, postLikes} = socialFeed[i];
    postList.innerHTML += `<div class="post">
                                <div class="post__header">
                                    <div class="post-meta">                    
                                        <div class="post-meta__icon">
                                            <img class="profile-pic" src="${postAuthorPic}" alt="Phil Mangione">                    
                                        </div>
                                        <div class="post-meta__data">
                                            <div class="post-meta__author">${postAuthorName}</div>
                                            <div class="post-meta__time">${postData}</div>
                                        </div>                    
                                    </div>
                                </div>
                                <div class="post__text">${postText}</div>
                                <div class="post__image">
                                    <img src="${postPhoto}" alt="">
                                </div>
                                <div class="post__footer">
                                    <div class="likes js-likes">
                                        <div class="likes__cta">
                                            <a class="like-button  js-like-button" href="#" data-postid="1">
                                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                                <span class="like-button__label">Mi Piace</span>
                                            </a>
                                        </div>
                                        <div class="likes__counter">
                                            Piace a <b id="like-counter-1" class="js-likes-counter">${postLikes}</b> persone
                                        </div>
                                    </div> 
                                </div>            
                            </div>`
}


// - Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.
