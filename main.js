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
  try {
    if (
      e.target.classList.contains("clicked-photo-container") ||
      document.querySelector(".close").contains(e.target)
    ) {
      document.querySelector(".clicked-photo-container").remove();
    }
  } catch (err) {}

  // next photo
  try {
    if (document.querySelector(".next-btn").contains(e.target)) {
      nextPhoto();
    }
  } catch (err) {}

  try {
    // prev photo
    if (document.querySelector(".prev-btn").contains(e.target)) {
      prevPhoto();
    }
  } catch (err) {}
});
