let buynow = document.querySelector('#buy-now')
let h3 = document.querySelector('h3')
let h2 = document.querySelector('h2')
let list = document.querySelector('.list')
let nav = document.querySelector('nav')
let main = document.querySelector('main')

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
   main.style.display='block'

  })
  let leftarrow = document.querySelector('.l-arrow')
  let rightarrow = document.querySelector('.r-arrow')
  let cardata = [
    
    {
      carname: 'Honda Civic',
      speed: `180/62000`,
      engine: `Smart Stream 2.5 Mpi`,
      Petrol: '60 Ltr.',
      Price: '1 Crore',
      img: 'Assets/cars/honda/Civic.jpg'
    },
    {
      carname: 'Hyundai Tucson',
      speed: `180/62000`,
      engine: `Smart Stream 2.5 Mpi`,
      Petrol: '60 Ltr.',
      Price: '80 Lakh',
      img: 'Assets/cars/hyundai/tucson.webp'
    },
    {
      carname: 'Suzuki Swift',
      speed: `180/62000`,
      engine: `Smart Stream 2.5 Mpi`,
      Petrol: '60 Ltr.',
      Price: '1.5 Crore',
      img: 'Assets/cars/suzuki/swift.webp'
    },
    {
      carname: 'Hyundai Santafe',
      speed: `180/62000`,
      engine: `Smart Stream 2.5 Mpi`,
      Petrol: '60 Ltr.',
      Price: '1.5 Crore',
      img: 'Assets/cars/hyundai/santaFe.png'
    },
    {
      carname: 'Kia Sportage',
      speed: `180/62000`,
      engine: `Smart Stream 2.5 Mpi`,
      Petrol: '60 Ltr.',
      Price: '1.5 Crore',
      img: 'Assets/cars/kia/Sportage.png'
    },
    {
      carname: 'Toyota Fortuner',
      speed: `180/62000`,
      engine: `Smart Stream 2.5 Mpi`,
      Petrol: '60 Ltr.',
      Price: '1.5 Crore',
      img: 'Assets/cars/toyota/Fortuner.png'
    },
  ]
  carindex = 0;
  function showcardetails (index) {
    document.getElementById('car-name').innerHTML = cardata[index].carname
    document.getElementById('speed').innerHTML = `<img src="./Assets/icons/speed-meter.png" > <span>${cardata[index].speed} </span>`
    document.getElementById('engine').innerHTML = `<img src="./Assets/icons/engine.png" > <span>${cardata[index].engine} </span> `
    document.getElementById('petrol').innerHTML = `<img src="./Assets/icons/full-tank.png" > <span>${cardata[index].Petrol} </span> `
    document.getElementById('price').innerHTML = `<img src="./Assets/icons/price.png" > <span>${cardata[index].Price} </span> `
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

      
  let carobj = {
    honda: {
        civic: {
            carname: 'Honda Civic',
            speed: `180/62000`,
            engine: `Smart Stream 2.5 Mpi`,
            Petrol: '60 Ltr.',
            Price: '80 Lakh',
            img: 'Assets/cars/hyundai/tucson.webp'
        },
        city: {
            carname: 'Honda City',
            speed: `180/62000`,
            engine: `Smart Stream 2.5 Mpi`,
            Petrol: '60 Ltr.',
            Price: '80 Lakh',
            img: 'Assets/cars/hyundai/tucson.webp'
        },
        hybrid: {
            carname: 'Honda Hybrid',
            speed: `180/62000`,
            engine: `Smart Stream 2.5 Mpi`,
            Petrol: '60 Ltr.',
            Price: '80 Lakh',
            img: 'Assets/cars/hyundai/tucson.webp'
        },
        brv: {
            carname: 'Honda Br-v',
            speed: `180/62000`,
            engine: `Smart Stream 2.5 Mpi`,
            Petrol: '60 Ltr.',
            Price: '80 Lakh',
            img: 'Assets/cars/hyundai/tucson.webp'
        },
    },
    kia: {
        rio: {
            carname: 'Kia Rio',
            speed: `180/62000`,
            engine: `Smart Stream 2.5 Mpi`,
            Petrol: '60 Ltr.',
            Price: '80 Lakh',
            img: 'Assets/cars/hyundai/tucson.webp'
        },
        sorento: {
            carname: 'Kia Sorento',
            speed: `180/62000`,
            engine: `Smart Stream 2.5 Mpi`,
            Petrol: '60 Ltr.',
            Price: '80 Lakh',
            img: 'Assets/cars/hyundai/tucson.webp'
        },
        sportage: {
            carname: 'Kia Sportage',
            speed: `180/62000`,
            engine: `Smart Stream 2.5 Mpi`,
            Petrol: '60 Ltr.',
            Price: '80 Lakh',
            img: 'Assets/cars/hyundai/tucson.webp'
        },
        stinger: {
            carname: 'Kia Stinger',
            speed: `180/62000`,
            engine: `Smart Stream 2.5 Mpi`,
            Petrol: '60 Ltr.',
            Price: '80 Lakh',
            img: 'Assets/cars/hyundai/tucson.webp'
        },
    },
    suzuki: {
        mehran: {
            carname: 'Suzuki Mehran',
            speed: `180/62000`,
            engine: `Smart Stream 2.5 Mpi`,
            Petrol: '60 Ltr.',
            Price: '80 Lakh',
            img: 'Assets/cars/hyundai/tucson.webp'
        },
        alto: {
            carname: 'Suzuki Alto',
            speed: `180/62000`,
            engine: `Smart Stream 2.5 Mpi`,
            Petrol: '60 Ltr.',
            Price: '80 Lakh',
            img: 'Assets/cars/hyundai/tucson.webp'
        },
        swift: {
            carname: 'Suzuki Swift',
            speed: `180/62000`,
            engine: `Smart Stream 2.5 Mpi`,
            Petrol: '60 Ltr.',
            Price: '80 Lakh',
            img: 'Assets/cars/hyundai/tucson.webp'
        },
        carry: {
            carname: 'Suzuki Carry',
            speed: `180/62000`,
            engine: `Smart Stream 2.5 Mpi`,
            Petrol: '60 Ltr.',
            Price: '80 Lakh',
            img: 'Assets/cars/hyundai/tucson.webp'
        },
    },
    toyota: {
        corolla: {
            carname: 'Toyota Corolla',
            speed: `180/62000`,
            engine: `Smart Stream 2.5 Mpi`,
            Petrol: '60 Ltr.',
            Price: '80 Lakh',
            img: 'Assets/cars/hyundai/tucson.webp'
        },
        fortuner: {
            carname: 'Toyota Fotuner',
            speed: `180/62000`,
            engine: `Smart Stream 2.5 Mpi`,
            Petrol: '60 Ltr.',
            Price: '80 Lakh',
            img: 'Assets/cars/hyundai/tucson.webp'
        },
        camry: {
            carname: 'Toyota Camry',
            speed: `180/62000`,
            engine: `Smart Stream 2.5 Mpi`,
            Petrol: '60 Ltr.',
            Price: '80 Lakh',
            img: 'Assets/cars/hyundai/tucson.webp'
        },
        prius: {
            carname: 'Toyota Prius',
            speed: `180/62000`,
            engine: `Smart Stream 2.5 Mpi`,
            Petrol: '60 Ltr.',
            Price: '80 Lakh',
            img: 'Assets/cars/hyundai/tucson.webp'
        },
    },
    hyundai: {
        sonata: {
            carname: 'Hyundai Sonata',
            speed: `180/62000`,
            engine: `Smart Stream 2.5 Mpi`,
            Petrol: '60 Ltr.',
            Price: '80 Lakh',
            img: 'Assets/cars/hyundai/tucson.webp'
        },
        tucson: {
            carname: 'Hyundai Tucson',
            speed: `180/62000`,
            engine: `Smart Stream 2.5 Mpi`,
            Petrol: '60 Ltr.',
            Price: '80 Lakh',
            img: 'Assets/cars/hyundai/tucson.webp'
        },
        santafe: {
            carname: 'Hyundai Santafe',
            speed: `180/62000`,
            engine: `Smart Stream 2.5 Mpi`,
            Petrol: '60 Ltr.',
            Price: '80 Lakh',
            img: 'Assets/cars/hyundai/tucson.webp'
        },
    },
  }
  let company = document.getElementById('company')
  let caritem = document.getElementById('caritem')
  let search = document.getElementById('search')
  company.innerHTML = `<option value="">Select Company </option>`
  caritem.innerHTML = `<option value="">Select Car </option>`
  for (const key in carobj) {
    company.innerHTML += `<option value="${key}"> ${key.toUpperCase()} </option>`
  }
  company.addEventListener('change', () => {
    caritem.innerHTML = `<option value="">Select Car </option>`
    for (var key1 in carobj[company.value]) {
      caritem.innerHTML += `<option value="${key1}">${key1.toUpperCase()}</option>`
        search.addEventListener('click', () => {
          console.log(caritem.value);
        })
    }

  })
  let selectedcompany = company.value
  let selectedcar = caritem.value
  search.addEventListener('click', () => {
    console.log(carobj[selectedcompany]);
    document.write = `${carobj[selectedcompany][selectedcar].carname}`
  })
  // search.addEventListener('click', () => {
  //   console.log(carobj[company.value.caritem.value]);
  // })
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