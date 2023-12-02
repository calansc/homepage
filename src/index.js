// eslint-disable-next-line no-unused-vars
import { css } from "./style.css";
import manatee from "./manatee.jpg";
import manatee2 from "./manatee2.jpg";

let headerPictureFrame = document.querySelector(".header-picture-frame");
let headerPicture = new Image();
headerPicture.classList.add("header-picture");
headerPicture.src = manatee2;
headerPictureFrame.appendChild(headerPicture);
// console.log(headerPicture);

let projectImg = document.querySelectorAll(".project-img");
let projectScreenshot = new Image();
projectScreenshot.classList.add("project-screenshot");
projectScreenshot.src = manatee;
projectImg[0].appendChild(projectScreenshot);
console.log(projectImg);
