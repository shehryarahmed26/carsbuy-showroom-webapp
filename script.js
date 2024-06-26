let buynow = document.querySelector('#buy-now')
let h3 = document.querySelector('h3')
let h2 = document.querySelector('h2')
let carsection = document.querySelector('.car-section')
function intro() {
    h3.style.display = 'block'
    buynow.style.display = 'block'

}
setTimeout(intro, 1000)
buynow.addEventListener('click', () => {
//   buynow.style.display='none'  
//   h3.style.display='none'  
//   h2.style.display='none'  
//   carsection.style.display='none'  
  carsection.className='animate__animated animate__zoomOut' 
  h3.className='animate__animated animate__zoomOut' 
  h2.className='animate__animated animate__zoomOut' 
  buynow.className='animate__animated animate__zoomOut' 
  console.log(carsection.className);

})