const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    // console.log('search for:', term);
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getTracks (term) {
    const trackEndpoint = baseURL + "?q=" + term + "&type=track";
    console.log(trackEndpoint);
    const data = await fetch(trackEndpoint).then(response => response.json());
    if(data.length === 0){
        document.querySelector('#tracks').innerHTML = "No Results Found";
        return;
    }
    document.querySelector('#tracks').innerHTML = "";
    for(let i=0; i < 5; i++){
    const template =`
    <section class="track-item preview" onclick="playSong('${data[i].id}')">
    <img src="${data[i].album.image_url}">
    <i class="fas play-track fa-play" aria-hidden="true"></i>
    <div class="label">
        <h2>${data[i].name}</h2>
        <p>
            ${data[i].artist.name}
        </p>
    </div>
</section>`
    document.querySelector('#tracks').insertAdjacentHTML('beforeend', template);
    }
}


function playSong(id){
    const template = `
        <iframe style="
            border-radius:12px" 
            src="https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowfullscreen="" 
            allow="autoplay; 
            clipboard-write; 
            encrypted-media; 
            fullscreen; 
            picture-in-picture" 
            loading="lazy">
        </iframe>`
        document.querySelector('#artist').innerHTML = template;
}




async function getAlbums (term) {
    const albumEndpoint = baseURL + "?q=" + term + "&type=album";
    // console.log(albumEndpoint);
    const data = await fetch(albumEndpoint).then(response => response.json());
    if(data.length === 0){
        document.querySelector('#albums').innerHTML = "No Results Found";
        return;
    }
}







async function getArtist (term) {
    const artistEndpoint = baseURL + "?q=" + term + "&type=artist";
    // console.log(artistEndpoint);
    const data = await fetch(artistEndpoint).then(response => response.json());
    if(data.length === 0){
        document.querySelector('#artist').innerHTML = "No Results Found";
        return;
    }
    // console.log(data[0].name);
    // console.log(data[0].image_url);
    const template = `
    <section class="artist-card" id="3Nrfpe0tUJi4K4DXYWgMUX">
                            <div>
                                <img src="${data[0].image_url}">
                                <h2>${data[0].name}</h2>
                                <div class="footer">
                                    <a href="${data[0].spotify_url}" target="_blank">
                                        view on spotify
                                    </a>
                                </div>
                            </div>
                        </section>
       `;

    document.querySelector('#artist').innerHTML = template;
};







document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    // console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}