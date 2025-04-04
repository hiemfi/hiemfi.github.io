const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altTexts = {'pics1.jpg': 'Closeup of a blue human eye', 'pic2.jpg': 'A beach at sunset','pic3.jpg':'A beautiful mountain landscape','pic4.jpg':'A city skyline at night', 'pic5.jpg':'A forest with morning fog'}

/* Looping through images */
imageFilenames.forEach(function(filename)){
    const newImage = document.createElement('img');
    newImage.setAttribute('src',`images/${filename}`)
    newImage.setAttribute('alt', altTexts[filename]);
}

newImage.addEventListener('click',function(){
    displayedImage.setAttribute('src', `images/$filename}`)
    displayedImage.setAttribute('alt', altTexts[filename]);
    thumbBar.appendChild(newImage)}


    btn.addEventListener('click', function() {
        const currentClass = btn.getAttribute('class');  
      
        
        if (currentClass === 'dark') {
          btn.setAttribute('class', 'light');  
          btn.textContent = 'Lighten';  
          overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';  
        } else {
          btn.setAttribute('class', 'dark');  
          btn.textContent = 'Darken';  
          overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)'; 
        }
      });
      
