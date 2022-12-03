const art = [
    {image_url:"art/revaandholly.jpg", alt:"Reva and Holly in the Prairie"},
    {image_url:"art/ancient.png", alt:"Four of my characters"},
    {image_url:"art/aspen.jpg", alt:"Aspen with a rose"},
    {image_url:"art/rhys.jpg", alt:"Rhys playing guitar"},
    {image_url:"art/cori.jpg", alt:"Cori in the snow"},
    {image_url:"art/nirvana.jpg", alt:"Nirvana in the water"},
    {image_url:"art/styx.jpg", alt:"Styx braiding flowers into his hair"},
    {image_url:"art/adrian.png", alt:"Adrian wearing glasses"},
    {image_url:"art/rain.jpg", alt:"Reva in the rain"},
    {image_url:"art/soul.jpg", alt:"Holly holding a star"},
    {image_url:"art/aben.jpg", alt:"Doodles of Aspen"},
    {image_url:"art/fall.png", alt:"Rhys falling"},
    {image_url:"art/desatur.jpg", alt:"Cori waving"},
    {image_url:"art/light.jpg", alt:"Nirvana with a light coming from her eye"},
    {image_url:"art/shadow.jpg", alt:"Styx with Nirvana in the background"},
  ];


  for(let i = 0; i < art.length; i++){
    const template=`
    <img class="drawing" alt="${art[i].alt}" src="${art[i].image_url}">`
    document.querySelector('.art-container').insertAdjacentHTML ('beforeend', template);
  }

  $(document).ready(function(){$("img").click(function(){this.requestFullscreen()})});