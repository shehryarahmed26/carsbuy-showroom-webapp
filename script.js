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
    document.getElementById('speed').innerHTML = `<img src="./Assets/icons/speed-meter.png" class="icon" > <span>${cardata[index].speed} </span>`
    document.getElementById('engine').innerHTML = `<img src="./Assets/icons/engine.png" class="icon" > <span>${cardata[index].engine} </span> `
    document.getElementById('petrol').innerHTML = `<img src="./Assets/icons/full-tank.png" class="icon" > <span>${cardata[index].Petrol} </span> `
    document.getElementById('price').innerHTML = `<img src="./Assets/icons/price.png" class="icon" > <span>${cardata[index].Price} </span> `
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
            Price: '1 Crore',
            img: 'Assets/cars/honda/civic.jpg'
        },
        city: {
            carname: 'Honda City',
            speed: `160/60000`,
            engine: `Smart Stream 2.3 Mpi`,
            Petrol: '70 Ltr.',
            Price: '50 Lakh',
            img: 'Assets/cars/honda/city.jpg'
        },
        hybrid: {
            carname: 'Honda Hybrid',
            speed: `150/62000`,
            engine: `Smart soft 2.5 Mpi`,
            Petrol: '70 Ltr.',
            Price: '80 Lakh',
            img: 'Assets/cars/honda/hybrid.webp'
        },
        brv: {
            carname: 'Honda Br-v',
            speed: `180/62000`,
            engine: `Smart Stream 2.2 Mpi`,
            Petrol: '50 Ltr.',
            Price: '95 Lakh',
            img: 'Assets/cars/honda/br-v.webp'
        },
    },
    kia: {
        rio: {
            carname: 'Kia Rio',
            speed: `135/62000`,
            engine: `Smart Stream 2.5 Mpi`,
            Petrol: '65 Ltr.',
            Price: '58 Lakh',
            img: 'Assets/cars/kia/Rio.jpg'
        },
        sorento: {
            carname: 'Kia Sorento',
            speed: `165/62000`,
            engine: `Smart Stream 2.2 Mpi`,
            Petrol: '45 Ltr.',
            Price: '75 Lakh',
            img: 'Assets/cars/kia/sorento.jpg'
        },
        sportage: {
            carname: 'Kia Sportage',
            speed: `175/62000`,
            engine: `Smart Stream 2.3 Mpi`,
            Petrol: '58 Ltr.',
            Price: '95 Lakh',
            img: 'Assets/cars/kia/Sportage.png'
        },
        stinger: {
            carname: 'Kia Stinger',
            speed: `170/62000`,
            engine: `Smart Stream 2.1 Mpi`,
            Petrol: '80 Ltr.',
            Price: '67 Lakh',
            img: 'Assets/cars/kia/Stinger.webp'
        },
    },
    suzuki: {
        mehran: {
            carname: 'Suzuki Mehran',
            speed: `130/62000`,
            engine: `Smart Stream 2.1 Mpi`,
            Petrol: '40 Ltr.',
            Price: '7 Lakh',
            img: 'Assets/cars/suzuki/mehran.jpg'
        },
        alto: {
            carname: 'Suzuki Alto',
            speed: `140/62000`,
            engine: `Smart Stream 2.2 Mpi`,
            Petrol: '70 Ltr.',
            Price: '15 Lakh',
            img: 'Assets/cars/suzuki/Alto.jpg'
        },
        swift: {
            carname: 'Suzuki Swift',
            speed: `155/62000`,
            engine: `Smart Stream 2.2 Mpi`,
            Petrol: '55 Ltr.',
            Price: '45 Lakh',
            img: 'Assets/cars/suzuki/swift.webp'
        },
        carry: {
            carname: 'Suzuki Carry',
            speed: `120/62000`,
            engine: `Smart Stream 2.1 Mpi`,
            Petrol: '60 Ltr.',
            Price: '50 Lakh',
            img: 'Assets/cars/kia/Carry.jpg'
        },
    },
    toyota: {
        corolla: {
            carname: 'Toyota Corolla',
            speed: `170/62000`,
            engine: `Smart Stream 2.5 Mpi`,
            Petrol: '60 Ltr.',
            Price: '85 Lakh',
            img: 'Assets/cars/toyota/Corolla.png'
        },
        fortuner: {
            carname: 'Toyota Fotuner',
            speed: `190/62000`,
            engine: `Smart Stream 2.9 Mpi`,
            Petrol: '30 Ltr.',
            Price: '1.8 Crore',
            img: 'Assets/cars/toyota/Fortuner.png'
        },
        camry: {
            carname: 'Toyota Camry',
            speed: `170/62000`,
            engine: `Smart Stream 2.5 Mpi`,
            Petrol: '50 Ltr.',
            Price: '76 Lakh',
            img: 'Assets/cars/toyota/Camry.jpg'
        },
        prius: {
            carname: 'Toyota Prius',
            speed: `170/62000`,
            engine: `Smart Stream 2.2 Mpi`,
            Petrol: '50 Ltr.',
            Price: '60 Lakh',
            img: 'Assets/cars/toyota/Prius.webp'
        },
    },
    hyundai: {
        sonata: {
            carname: 'Hyundai Sonata',
            speed: `165/62000`,
            engine: `Smart Stream 2.5 Mpi`,
            Petrol: '48 Ltr.',
            Price: '88 Lakh',
            img: 'Assets/cars/hyundai/Sonata.jpg'
        },
        tucson: {
            carname: 'Hyundai Tucson',
            speed: `190/62000`,
            engine: `Smart Stream 2.5 Mpi`,
            Petrol: '30 Ltr.',
            Price: '1.1 Crore',
            img: 'Assets/cars/hyundai/tucson.webp'
        },
        santafe: {
            carname: 'Hyundai Santafe',
            speed: `160/62000`,
            engine: `Smart Stream 2.5 Mpi`,
            Petrol: '40 Ltr.',
            Price: '72 Lakh',
            img: 'Assets/cars/hyundai/SantaFe.png'
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
  let herosection = document.querySelector('.hero-section')
  // search.addEventListener('click', () => {
    function herosectionpage() {
      main.style.display = 'none'
    let selectedcompany = company.value
    let selectedcar = caritem.value
    let cardetails = carobj[selectedcompany][selectedcar]
    console.log(cardetails.img);
    herosection.innerHTML = `<img src="${cardetails.img}" class="hero-img" alt="">
        <h2 id="hero-2">${cardetails.carname}</h2>
        <div class="specs">
         <img src="./Assets/icons/engine.png" > <span>${cardetails.price} </span>
         <img src="./Assets/icons/speed-meter.png" > <span>${cardetails.speed} </span>
         <img src="./Assets/icons/full-tank.png" > <span>${cardetails.Petrol} </span>
         <img src="./Assets/icons/price.png" > <span>${cardetails.Price} </span>
        </div>` 
       // console.log(cardetails);
      }
  // })
  let home = document.getElementById('home')
  function homepage() {
    herosection.style.display = 'none'
    main.style.display = 'block'
  }
  let carshowroom = document.getElementById('showroom')
// function carshowroompage () {
//   main.style.display = 'none'
//   for (key in carobj) {

//     for (key1 in carobj[key]) {
//       carshowroom.innerHTML += `
//       <div class="card">
//             <img src="${key1.img}" alt="">
//             <h2>${key1.carname}</h2>

//         </div>
//       `
//     }
//   }
// }
