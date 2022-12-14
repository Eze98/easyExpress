/**
 * @param  {string} selector
 * @param  {HTMLElement} node=document.body
 * @returns {HTMLElement}
 */
export function $(selector, node=document.body){
  return node.querySelector(selector)
}

export function $$(selector, node=document.body){
  return [...node.querySelectorAll(selector)]
}
