<script setup>
    function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);



</script>


<template>
  
    <section class="oink">
        <img src="@/assets/img/céu.png" alt="céu" id="ceu">
        <img src="@/assets/img/estrelas.png" alt="estrelas" id="estrelas">
        <img class="reveal" src="@/assets/img/lua.png" alt="lua" id="lua">
        <img src="@/assets/img/montanhas.png" alt="montanhas " id="montanhas">
        <h2 id="texto">LIVROS</h2>
        <a href="#sec" id="btn">Explorar</a>
        <img class="" src="@/assets/img/rua.png" alt="rua" id="rua">
    </section>
    <div class="sec" id="sec">
        <div id="container">
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
          </div>
          
        <h2>Parallax</h2>
        <p class="reveal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis corporis in expedita quibusdam nostrum mollitia optio, ab dolores? Ab beatae blanditiis eum ipsa velit deserunt eaque voluptate quis a esse Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis sunt ullam tempore deleniti sapiente fuga quos libero accusamus ipsum vel molestiae omnis quasi voluptatibus ab, nobis facere, ratione sequi consequatur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis optio deleniti rem error nisi accusantium ut obcaecati tenetur dolor, nostrum fugit ipsam, voluptate corporis animi excepturi aspernatur ea saepe? Eum. <br><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat natus? Cum possimus id tempora quo error animi, quod quos minima dolorem tenetur quibusdam vero totam fugit eius. Hic, nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eligendi quae tempora error minus, quaerat voluptas reprehenderit. Minima ut in, cum ex corporis, adipisci aperiam quis repellendus vel, atque facere! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta labore pariatur, ducimus, fugiat rerum facere natus, dolor iste ad corporis maxime in! Nisi molestiae maxime, perferendis doloribus omnis corrupti incidunt.
            <img src="@/assets/img/estrelas.png" alt="estrelas" style="position: absolute; display: flex;
            justify-content: center; top: -100px; height: 950px;"><br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta suscipit dignissimos id veniam quas perferendis molestias atque vel rem blanditiis esse, laudantium est neque quos ea. Officiis soluta ullam ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta odio repudiandae quaerat? Cum at, quis aut ad sunt excepturi aspernatur doloremque quibusdam esse officiis blanditiis numquam? Deserunt, reprehenderit architecto. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla obcaecati facere accusantium voluptas repellat? Quis, aut. Maiores asperiores, sapiente iusto aliquam doloribus voluptas dignissimos consectetur dolor dolorem animi magni exercitationem?</p>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

    
    
</template>

<style scoped>

.oink {
  z-index: 100;
}


*{
    margin: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    padding: 0;
    scroll-behavior: smooth;
  }

  body{
    min-height: 100vh;
    overflow-x: hidden;
    background: linear-gradient(#2b1055,#7597de);
  }

  header{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 30px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10000;
  }

  header .logo{
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  header ul{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header ul li {
    list-style: none;
    margin-left: 20px;
  }

  header ul li a{
    text-decoration: none;
    padding: 6px 15px;
    color: #fff;
    border-radius: 20px;
  }

  header ul li a:hover{
    background: #fff;
    color: #2b1055;
  }

  section{
    width: 100%;
    height: 100vh;
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  section::before{
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top,#0d0422,transparent);
    z-index: 1000;
  }

  section img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  section img#lua{
    mix-blend-mode: screen;
  }

  section img#montanhas{
    z-index: 8;
  }

  #texto{
    position: absolute;
    color: #fff;
    white-space: nowrap;
    font-size: 7.5vw;
    z-index: 9;
    top: 90px;
    transition: 0.8s;
}

body{
  background-color: #0d0422;;
}

  #rua{
        z-index: 10;
    }

  #btn{
    text-decoration: none;
    display: inline-block;
    padding: 8px 30px;
    margin-right: 280px;
    border-radius: 40px;
    background: #fff;
    color: #000000;
    font-size: 1.5em;
    z-index: 9;
    transform: translate(100px);
    transition: 0.5s;
  }

  #btn:hover{
    background: #969595;
    color: #fff;
  }

  .sec{

    padding: 100px;
    background: #0d0422;
  }

  .sec h2{
    font-size: 3.5em;
    margin-bottom: 10px;
    color: #fff; 
 }

 .sec p{
    font-size: 1.2em;
    color: #fff;
 }

 .particle {
    position: absolute;
    border-radius: 50%;
    background-color: #4eddfc;
    box-shadow: 0 0 3px #4eddfc;
    animation-duration: 60s;
    animation-iteration-count: infinite;
  }
  
  .particle:nth-child(odd) {
    height: 9px;
    width: 9px;
  }
  
  .particle:nth-child(even) {
    height: 7px;
    width: 7px;
  }
  
  .particle:nth-child(1) {
    opacity: 0.46;
    animation-name: particle1;
    animation-delay: -0.2s;
    transform: translate3d(55vw, 79vh, 22px);
  }
  @keyframes  particle1 {
    100% {
      transform: translate3d(80vw, 51vh, 9px);
    }
  }
  
  .particle:nth-child(2) {
    opacity: 0.08;
    animation-name: particle2;
    animation-delay: -0.4s;
    transform: translate3d(4vw, 21vh, 14px);
  }
  @keyframes  particle2 {
    100% {
      transform: translate3d(31vw, 35vh, 87px);
    }
  }
  
  .particle:nth-child(3) {
    opacity: 0.41;
    animation-name: particle3;
    animation-delay: -0.6s;
    transform: translate3d(78vw, 63vh, 52px);
  }
  @keyframes  particle3 {
    100% {
      transform: translate3d(42vw, 66vh, 40px);
    }
  }
  
  .particle:nth-child(4) {
    opacity: 0.33;
    animation-name: particle4;
    animation-delay: -0.8s;
    transform: translate3d(56vw, 32vh, 88px);
  }
  @keyframes  particle4 {
    100% {
      transform: translate3d(78vw, 4vh, 55px);
    }
  }
  
  .particle:nth-child(5) {
    opacity: 0.4;
    animation-name: particle5;
    animation-delay: -1s;
    transform: translate3d(79vw, 74vh, 14px);
  }
  @keyframes  particle5 {
    100% {
      transform: translate3d(2vw, 47vh, 68px);
    }
  }
  
  .particle:nth-child(6) {
    opacity: 0.41;
    animation-name: particle6;
    animation-delay: -1.2s;
    transform: translate3d(92vw, 27vh, 61px);
  }
  @keyframes  particle6 {
    100% {
      transform: translate3d(80vw, 35vh, 11px);
    }
  }
  
  .particle:nth-child(7) {
    opacity: 0.74;
    animation-name: particle7;
    animation-delay: -1.4s;
    transform: translate3d(55vw, 60vh, 75px);
  }
  @keyframes  particle7 {
    100% {
      transform: translate3d(63vw, 15vh, 59px);
    }
  }
  
  .particle:nth-child(8) {
    opacity: 0.09;
    animation-name: particle8;
    animation-delay: -1.6s;
    transform: translate3d(10vw, 10vh, 55px);
  }
  @keyframes  particle8 {
    100% {
      transform: translate3d(30vw, 64vh, 91px);
    }
  }
  
  .particle:nth-child(9) {
    opacity: 0.89;
    animation-name: particle9;
    animation-delay: -1.8s;
    transform: translate3d(3vw, 53vh, 98px);
  }
  @keyframes  particle9 {
    100% {
      transform: translate3d(60vw, 80vh, 97px);
    }
  }
  
  .particle:nth-child(10) {
    opacity: 0.23;
    animation-name: particle10;
    animation-delay: -2s;
    transform: translate3d(64vw, 77vh, 95px);
  }
  @keyframes  particle10 {
    100% {
      transform: translate3d(18vw, 5vh, 7px);
    }
  }
  
  .particle:nth-child(11) {
    opacity: 0.96;
    animation-name: particle11;
    animation-delay: -2.2s;
    transform: translate3d(35vw, 6vh, 101px);
  }
  @keyframes  particle11 {
    100% {
      transform: translate3d(88vw, 14vh, 71px);
    }
  }
  
  .particle:nth-child(12) {
    opacity: 0.52;
    animation-name: particle12;
    animation-delay: -2.4s;
    transform: translate3d(55vw, 12vh, 33px);
  }
  @keyframes  particle12 {
    100% {
      transform: translate3d(46vw, 5vh, 3px);
    }
  }
  
  .particle:nth-child(13) {
    opacity: 0.95;
    animation-name: particle13;
    animation-delay: -2.6s;
    transform: translate3d(90vw, 27vh, 70px);
  }
  @keyframes  particle13 {
    100% {
      transform: translate3d(51vw, 75vh, 18px);
    }
  }
  
  .particle:nth-child(14) {
    opacity: 0.98;
    animation-name: particle14;
    animation-delay: -2.8s;
    transform: translate3d(3vw, 73vh, 11px);
  }
  @keyframes  particle14 {
    100% {
      transform: translate3d(45vw, 46vh, 28px);
    }
  }
  
  .particle:nth-child(15) {
    opacity: 0.69;
    animation-name: particle15;
    animation-delay: -3s;
    transform: translate3d(86vw, 82vh, 49px);
  }
  @keyframes  particle15 {
    100% {
      transform: translate3d(16vw, 31vh, 36px);
    }
  }

  #texto{
    padding: 150px;
  }

</style>
