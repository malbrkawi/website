const navBar = document.querySelector(".navbar");

navBar.innerHTML = `

 <div class="col-12">
     <nav class="navbar navbar-expand-lg navbar-dark bg-outline-gold rounded-3 mt-5">
         <div class="container-fluid">
             <a class="navbar-brand lead" href="#"><img src="./img/coach.png" class="img-fluid w-25">
                 G.Massoud
             </a>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                 data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                 aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
             </button>
             <div class="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul class="navbar-nav ms-auto">
                     <li class="nav-item">
                         <a class="nav-link active" aria-current="page" href="#">Home</a>
                     </li>
                     <li class="nav-item">
                         <a class="nav-link" aria-current="page" href="#">Over ons</a>
                     </li>
                     <li class="nav-item">
                         <a class="nav-link" aria-current="page" href="#">Contact</a>
                     </li>
                     <li class="nav-item ms-5">
                         <button class="btn btn-danger text-white aanmelden-btn border-3">Aanmelden</button>
                     </li>
                 </ul>
             </div>
         </div>
     </nav>
 </div>

`;

for (let index = 0; index < cardsInfo.length; index++) {
  const element = cardsInfo[index];
  const cards = document.querySelector(".cards");
  cards.innerHTML += `
<div class="col-12 col-lg-4 py-3">
    <div class="card">
        <img src="./img/${element.img}" class="card-img-top img-size img-fluid h-25" alt="...">
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.text}</p>
            <a href="${element.link}" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</div>`;
}
