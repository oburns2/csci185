const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
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

    console.log(data[0].name);
   
}

async function getAlbums (term) {
    const albumEndpoint = baseURL + "?q=" + term + "&type=album";
    console.log(albumEndpoint);
    const data = await fetch(albumEndpoint).then(response => response.json());

    if(data.length === 0){
        document.querySelector('#albums').innerHTML = "No Results Found";
        return;
    }

    console.log(data[0].name);
}

async function getArtist (term) {
    const artistEndpoint = baseURL + "?q=" + term + "&type=artist";
    console.log(artistEndpoint);
    const data = await fetch(artistEndpoint).then(response => response.json());

    if(data.length === 0){
        document.querySelector('#artist').innerHTML = "No Results Found";
        return;
    }

    console.log(data[0].name);
    console.log(data[0].image_url);
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
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}