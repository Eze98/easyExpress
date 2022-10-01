/**
 * @param  {HTMLElement} imageContainer
 */
export function changeImage(imageContainer){
  let stepper = 0;
  imageContainer.children[stepper].hidden = false
  setInterval(()=>{
    if(stepper >= imageContainer.children.length){
      stepper = 0
      imageContainer.children[imageContainer.children.length-1].hidden = true
    }

    imageContainer.children[stepper].hidden = false
    if(stepper){
      imageContainer.children[stepper-1].hidden = true
    }
    stepper++
  }, 2000)
}
