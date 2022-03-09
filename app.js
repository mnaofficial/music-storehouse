const elementById = (id) => {
    return document.getElementById(id);
}
const handleSearch = () => {
    const inputFiled = elementById('input-filed');

    const url = `https://theaudiodb.com/api/v1/json/2/search.php?s=${inputFiled.value}`;

    fetch(url)
        .then(res => res.json())
        .then(data => showArtists(data))


}

const showArtists = (data) => {
    const artistContainer = elementById('artists');
    const artists = data.artists;

    artists.forEach(artist => {
        /* or:============================
        const showArtists = ({artists}) => {
            artists.forEach(artist => { }
        ==================================*/
        const div = document.createElement('div');
        div.classList.add('artist-card')

        div.innerHTML = `
            <div class="image-container">
              <div class="image-container-inner">
                 <img src="${artist.strArtistThumb ? artist.strArtistThumb : "https://png.pngtree.com/png-clipart/20210915/ourlarge/pngtree-avatar-placeholder-abstract-white-blue-green-png-image_3918476.jpg"}" alt="" />
              </div>
            </div>
            <div class="info-container">
              <h3>Singer: ${artist.strArtist}</h3>
              <p>Country: ${artist.strCountry ? artist.strCountry : "Not Available"}</p>
              <p>Style: ${artist.strGenre ? artist.strGenre : "Not Available"}</p>
           </div>
           <button onclick="showAlbum()" class="album-button">
               <i class="fa-solid fa-compact-disc"></i>
               <p onclick="fetchAlbums('${artist.idArtist}')" class="button-title">Albums</p>
           </button>`;
        artistContainer.appendChild(div);
    });
}

const showAlbum = () => {
    console.log('akhhgggh')
}