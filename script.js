window.addEventListener('DOMContentLoaded', function() {
    alert('Selamat datang!');
  });

 
const content = document.getElementById('myContent');


let position = 0;


const speed = 2; 


function moveContent() {

  position += speed;
  

  content.style.left = position + 'px';
  

  const contentWidth = content.offsetWidth;
  const pageWidth = window.innerWidth;
  
  if (position + contentWidth > pageWidth) {
    position = -contentWidth;
  }
  

  requestAnimationFrame(moveContent);
}


window.addEventListener('load', function() {
  requestAnimationFrame(moveContent);
});

