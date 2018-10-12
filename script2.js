var bigImage = document.getElementById('bigImage');
var carousel = document.getElementById('carousel').getElementByTagName('img');

for(var i = 0; i<carousel.length; i++){
  carousel[i].addEventListener('click', changeImage;
  console.log(i);
}
function changeImage(){
  var src = this.getAttribute('src');
  bigImage.innerHTML = "<img src = " + src + ">";
}
