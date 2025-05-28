const API_KEY = "jHzgUyOpNks1JyA5bYk8habW0pw8v27GL0ni69b7mNbTlx1vbFmeAf4p";
const page = Math.floor((Math.random() * 8000) / 6);
let idCounter = 0;

async function fetchPhotos() {
  try {
    const response = await fetch(
      `https://api.pexels.com/v1/curated?per_page=6&page=${page}`,
      {
        headers: {
          Authorization: API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching photos:", error);
  }
}

function displayPhotos(data, photosContainer) {
  for (let i of data.photos) {
    idCounter += 1;
    let photoCardHtml = `
        <div
        class="photo-card lg:min-w-90 xl:max-w-105 h-72 rounded-lg overflow-hidden group transform transition-transform duration-500 hover:scale-105 relative cursor-pointer"
        id=${idCounter}
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
}

function displayClickedPhoto(clickedPhoto) {
  let target = clickedPhoto.closest(".photo-card");
  let targetId = target.id;
  let imageHtml = `
    <div
      class="clicked-photo-container fixed top-0 bg-black/50 w-screen h-screen flex flex-col justify-center items-center gap-6 p-4 md:p-12"
      id=${targetId}
    >
      <div class="close w-full flex justify-end">
        <button
          class="close-btn cursor-pointer w-12 h-12 rounded-full bg-[#1a1a1b] outline-3 outline-[#3d3d3d] text-white text-2xl flex justify-center items-center"
        >
          <i class="fa-solid fa-xmark text-white"></i>
        </button>
      </div>
      <div
        class="clicked-photo max-w-[90vw] max-h-[90vh] rounded-lg overflow-hidden"
      >
        <img
          class="w-full h-full object-cover"
          src="${target.querySelector("img").src}"
          alt="clicked photo"
        />
      </div>
      <div class="details text-center text-white text-lg md:text-2xl">
      ${target.querySelector("h3").innerText}
      </div>
    </div>
    `;
  document.body.insertAdjacentHTML("beforeend", imageHtml);
}
