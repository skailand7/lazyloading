import { registerImage } from "./lazy";
const baseUrl = "https://rickandmortyapi.com/api/character/";

const createImageNode = () => {
  const rndImage = Math.floor(Math.random() * 826);
  const container = document.createElement("div");
  container.className = "p-4";

  const image = document.createElement("img");
  image.className = "mx-auto";
  image.width = "240";
  image.dataset.src = `${baseUrl}avatar/${rndImage}.jpeg`;

  const imageWrapper = document.createElement("div");
  imageWrapper.className = "wrapper";

  imageWrapper.appendChild(image);

  container.appendChild(imageWrapper);
  return container;
};

const container2 = document.querySelector("#images");
const evento = () => {
  const newImage = createImageNode();
  container2.append(newImage);
  registerImage(newImage);
};

const addButton = document.querySelector("#btnAdd");
const rmvButton = document.querySelector("#btnRemove");
const rmvOButton = document.querySelector("#btnRemoveOne");
addButton.addEventListener("click", evento);

const deleteNode = () => {
  [...container2.childNodes].forEach((element) => {
    element.remove();
  });
};
const deleteLast = () => {
  const arr = [...container2.childNodes];
  arr[arr.length - 1].remove();
};
rmvOButton.addEventListener("click", deleteLast);
rmvButton.addEventListener("click", deleteNode);

// const app = document.querySelector("#images");
// const button = document.querySelector("#btnAdd");

// const items = [];

// window
//   .fetch(baseUrl)
//   .then((respuesta) => respuesta.json())
//   .then((responseJson) => {
//     responseJson.results.forEach((element) => {
//       const rndImage = Math.floor(Math.random() * 826);
//       const image = document.createElement("img");
//       //image.src = `${element.image}`;
//       image.src = `${baseUrl}avatar/${rndImage}.jpeg`;
//       image.className = "mx-auto";
//       image.width = "240";

//       const container = document.createElement("div");
//       container.className = "p-4";
//       container.append(image);

//       console.log(element.name);

//       items.push(container);
//     });

//     button.addEventListener("click", () => {
//       app.append(...items);
//     });
//   });
