let photosContainer = document.querySelector(".photos-container");

fetchPhotos().then((data) => {
  displayPhotos(data, photosContainer);
});

document.addEventListener("click", (e) => {
  // display photo when clicked
  if (e.target.closest(".photo-card")) {
    displayClickedPhoto(e.target);
  }

  // close photo
  if (
    e.target.classList.contains("clicked-photo-container") ||
    document.querySelector(".close").contains(e.target)
  ) {
    document.querySelector(".clicked-photo-container").remove();
  }
});
