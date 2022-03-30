(() => {
  function flipCard () {
    let targets = document.querySelectorAll('.card_js'),
      hasfliped = false;

    targets.forEach(target => {
      hasfliped = target.hasfliped
      target.addEventListener('click', () =>{
        if (!target.hasfliped) {
          target.firstElementChild.classList.add('flip');
          target.hasfliped = true;
        } else {
          target.firstElementChild.classList.remove('flip');
          target.hasfliped = false
        }
      })
    })
  }

  function superman () {
    let hero = document.getElementById('superman'),
      laser = document.querySelector('.laser');
    laser.classList.remove('laser');

    setInterval(function () {
      hero.classList.remove('idle');
      hero.classList.add('attack');
      laser.classList.add('laser');

      setTimeout(function () {

        hero.classList.remove('attack');
        hero.classList.add('idle');
        laser.classList.remove('laser');


      }, 3000);

    }, 5000);
  }


  flipCard();
  superman();
})();
