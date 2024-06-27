let buynow = document.querySelector('#buy-now')
let h3 = document.querySelector('h3')
let h2 = document.querySelector('h2')
let list = document.querySelector('.list')
let nav = document.querySelector('nav')

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
  // h2.className='animate__animated animate__zoomOut' 
  buynow.className='animate__animated animate__zoomOut' 
   list.style.display='flex'
   buynow.style.display='none'
   nav.style.display='flex'
   carsection.style.display='none'

  })
  let leftarrow = document.querySelector('.l-arrow')
  let rightarrow = document.querySelector('.r-arrow')
  let cardata = [
    {
      carname: 'Honda Civic',
      model: 2024,
      Price: '1 Crore',
      img: 'Assets/cars/honda/Civic.jpg'
    },
    {
      carname: 'Toyota Corolla',
      model: 2024,
      Price: '80 Lakh',
      img: 'Assets/cars/toyota/Corolla.png'
    },
    {
      carname: 'Toyota Fortuner',
      model: 2024,
      Price: '1.5 Crore',
      img: 'Assets/cars/toyota/Fortuner.png'
    },
  ]
  carindex = 0;
  function showcardetails (index) {
    document.getElementById('car-name').innerHTML = cardata[index].carname
    document.getElementById('model').innerHTML = cardata[index].model
    document.getElementById('carimg').src = cardata[index].img
  }
  
  function next() {
    carindex = (carindex < cardata.length - 1) ? carindex + 1 : 0
    showcardetails(carindex)
  }

  function perv() {
    carindex = (carindex > 0) ? carindex - 1 : cardata.length -1;
    showcardetails(carindex)
  }



  showcardetails(carindex)
  // leftarrow.addEventListener('click', () => {
  //   let civic = document.querySelector('.civic')
  //   let city = document.querySelector('.city')
  //   let hybrid = document.querySelector('.hybrid')
  //   civic.style.transform = 'translateX(-100%)';
  //   city.style.transform = 'translateX(-100%)';
  //   hybrid.style.transform = 'translateX(-100%)';
  //   // console.log(mainimgs);
  // })
  // rightarrow.addEventListener('click', () => {
  //   let civic = document.querySelector('.civic')
  //   let city = document.querySelector('.city')
  //   let hybrid = document.querySelector('.hybrid')
  //   civic.style.transform = 'translateX(100%)';
  //   city.style.transform = 'translateX(100%)';
  //   hybrid.style.transform = 'translateX(100%)';
  //   // console.log(mainimgs);
  // })