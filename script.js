const imgContainer = document.querySelector('.img-container');

// simple timer ode
let time = '';

function resetTime() {
  time = new Date();
}
function elapsedTime(type) {
  const now = new Date();
  console.log(type, (now - time) / 1000);
}

// Fetch photo from server
async function fetchImage(w = 200, h = 300) {
  try {
    const data = await fetch(`https://picsum.photos/${w}/${h}/`);
    return data.url;
  } catch (err) {
    return new Error(err);
  }
}

// Load photos to DOM
function loadImages(...sources) {
  sources.forEach((source) => {
    const img = document.createElement('img');
    img.src = source;
    imgContainer.append(img);
  });
}

(async function () {
  resetTime();
  try {
    const photo1 = fetchImage(700, 800);
    const photo2 = fetchImage(50, 50);
    const photo3 = fetchImage(100, 200);
    // loadImages(photo1, photo2, photo3);
  } catch (err) {
    console.log(err);
  }
  elapsedTime('one-by-one');
})();

// (async function () {
//   resetTime();
//   try {
//     const photo1 = fetchImage(700, 800);
//     const photo2 = fetchImage(50, 50);
//     const photo3 = fetchImage(100, 200);

//     const allPromises = await Promise.all([photo1, photo2, photo3]);
//   } catch (err) {
//     console.log(err);
//   }
//   elapsedTime('parallel');
// })();
