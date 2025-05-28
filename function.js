const API_KEY = "jHzgUyOpNks1JyA5bYk8habW0pw8v27GL0ni69b7mNbTlx1vbFmeAf4p";
const query = "Nature";
const page = Math.floor((Math.random() * 8000) / 6);
let idCounter = 0;

async function fetchPhotos() {
  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${query}&per_page=6&page=${page}`,
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
        class="clicked-photo relative max-w-[95vw] max-h-[95vh] flex items-center sm:p-4 gap-6"
      >
        <button
          class="prev-btn cursor-pointer -left-22 max-[1430px]:left-5 absolute w-14 h-14 max-[1430px]:w-12 max-[1430px]:h-12 max-[700px]:w-10 max-[700px]:h-10 rounded-full bg-[#1a1a1b] outline-3 outline-[#3d3d3d] text-white text-2xl flex justify-center items-center"
        >
          <i class="fa-solid fa-chevron-left text-white"></i>
        </button>
        <img
          class="w-full h-full object-cover rounded-lg"
          src="${target.querySelector("img").src}"
          alt="clicked photo"
        />
        <button
          class="next-btn cursor-pointer -right-22 max-[1430px]:right-5 absolute w-14 h-14 max-[1430px]:w-12 max-[1430px]:h-12 max-[700px]:w-10 max-[700px]:h-10 rounded-full bg-[#1a1a1b] outline-3 outline-[#3d3d3d] text-white text-2xl flex justify-center items-center"
        >
          <i class="fa-solid fa-chevron-right text-white"></i>
        </button>

      </div>
      <div class="details text-center text-white text-lg md:text-2xl">
      ${target.querySelector("h3").innerText}
      </div>
    </div>
    `;
  document.body.insertAdjacentHTML("beforeend", imageHtml);
}
