import { changeImage } from "./utils/index.js";
import { $ } from "./utils/selector.js";

$('#menu-button')
  .addEventListener('click', ()=>{
    const menuElement = $('#menu-responsive');
    menuElement.classList.toggle('menu-show');

    !menuElement.classList.contains('hidden') && menuElement.classList.toggle('hidden-menu');
    menuElement.classList.remove('hidden')
  })


changeImage($('#img-content'))