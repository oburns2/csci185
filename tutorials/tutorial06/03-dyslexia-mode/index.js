/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/
function dyslexiaMode = ev => {
document.querySelector('div.content').className.toggle = "dyslexia-mode";
};