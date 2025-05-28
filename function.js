// const API_KEY = "jHzgUyOpNks1JyA5bYk8habW0pw8v27GL0ni69b7mNbTlx1vbFmeAf4p";
// const query = "Nature";

// async function fetchPhotos() {
//   try {
//     const response = await fetch(
//       `https://api.pexels.com/v1/search?query=${query}&per_page=1`,
//       {
//         headers: {
//           Authorization: API_KEY,
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching photos:", error);
//   }
// }
