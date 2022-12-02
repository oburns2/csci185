const art = [
    {image_url:"art/revaandholly.jpg"},
    {image_url:"art/ancient.png"},
    {image_url:"art/aspen.jpg"},
    {image_url:"art/rhys.jpg"},
    {image_url:"art/cori.jpg"},
    {image_url:"art/nirvana.jpg"},
    {image_url:"art/styx.jpg"},
    {image_url:"art/adrian.png"},
    {image_url:"art/rain.jpg"},
    {image_url:"art/soul.jpg"},
    {image_url:"art/aben.jpg"},
    {image_url:"art/fall.png"},
    {image_url:"art/desatur.jpg"},
    {image_url:"art/light.jpg"},
    {image_url:"art/shadow.jpg"},
  ];


  for(let i = 0; i < art.length; i++){
    const template=`
    <img class="drawing" src="${art[i].image_url}">`

    console.log("yo mama");
    document.querySelector('.art-container').insertAdjacentHTML ('beforeend', template);
  }