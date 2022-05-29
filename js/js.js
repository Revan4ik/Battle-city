var step = 10;
document.addEventListener('keydown', function (e){
    var car = document.querySelector('.Tank');
    var bullet = document.querySelector('.bullet');
    var hCar = car.getBoundingClientRect().height;
    var wCar = car.getBoundingClientRect().width;
    var lCar = car.getBoundingClientRect().left;
    var tCar = car.getBoundingClientRect().top;
    if(e.code === "KeyD"){
        car.style.left = lCar >= window.innerWidth - wCar - step
            ? window.innerWidth - wCar + 'px'
            : lCar + step + 'px'
        car.style.transform = 'rotate(180deg)';
        bullet.style.cssText = "display: hidden"
        bullet.style.width = '20px'
    } else if(e.code === "KeyA"){
        car.style.left = lCar < 0 
        ? 0 + 'px' 
        : lCar - step + 'px'
        car.style.transform = 'rotate(0deg)';
        bullet.style.cssText = "display: hidden"
        bullet.style.width = '20.1px'
    } else if (e.code === "KeyS"){
      car.style.transform = 'rotate(270deg)'
      car.style.top = tCar >= window.innerHeight - hCar - step 
      ? window.innerHeight - hCar + 'px'
      : tCar + step + 'px'
      bullet.style.cssText = "display: hidden"
      bullet.style.width = '20.2px'

    }
    else if (e.code === "KeyW"){
      car.style.transform = 'rotate(90deg)'
      car.style.top = tCar < 0
      ? 0 + 'px'
      : tCar - step + 'px'
      bullet.style.cssText = "display: hidden"
      bullet.style.width = '20.3px'
    } else if (e.code === "Space"){
      if (bullet.style.width == 20 + 'px'){
      bullet.style.cssText = "display: block;"
      bullet.style.left = lCar + wCar + 'px';
      bullet.style.top = hCar / 2 + tCar -4 + 'px';
      } else if (bullet.style.width == 20.1 + 'px'){
      bullet.style.cssText = "display: block;"
      bullet.style.left = lCar + wCar - 122 + 'px';
      bullet.style.top = hCar + tCar - 56 + 'px';
      bullet.style.transform = 'rotate(180deg)';
      } else if (bullet.style.width == 20.2 + 'px'){
        bullet.style.cssText = "display: block;"
        bullet.style.left = lCar + wCar - 61 + 'px';
        bullet.style.top = hCar + tCar + 7 + 'px';
        bullet.style.transform = 'rotate(90deg)';
        } else if (bullet.style.width == 20.3 + 'px'){
          bullet.style.cssText = "display: block;"
          bullet.style.left = lCar + wCar / 2 - 8 + 'px';
          bullet.style.top =  tCar - 15 + 'px';
          bullet.style.transform = 'rotate(270deg)';
          }
    }
})
