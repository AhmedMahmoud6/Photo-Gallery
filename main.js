let photosContainer = document.querySelector(".photos-container");

fetchPhotos().then((data) => {
  for (let i of data.photos) {
    let photoCardHtml = `
        <div
        class="photo-card lg:min-w-90 xl:max-w-105 h-72 rounded-lg overflow-hidden group transform transition-transform duration-500 hover:scale-105 relative cursor-pointer"
      >
        <img
          class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          src="${i.src.landscape}"
          alt=""
        />
        <div
          class="photo-overlay flex items-end transform transition-transform duration-500 group-hover:translate-y-0 bg-gradient-to-b from-transparent to-black/70 h-30 absolute bottom-0 w-full p-12 pb-3 pt-10 px-6 translate-y-30"
        >
          <h3 class="text-white">${i.alt}</h3>
        </div>
      </div>
        `;
    photosContainer.insertAdjacentHTML("beforeend", photoCardHtml);
  }
});
