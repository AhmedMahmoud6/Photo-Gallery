const API_KEY = "jHzgUyOpNks1JyA5bYk8habW0pw8v27GL0ni69b7mNbTlx1vbFmeAf4p";
const page = Math.floor((Math.random() * 8000) / 6);

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
