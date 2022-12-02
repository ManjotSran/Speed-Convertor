let distance = document.getElementById('distanceInput');

let seconds = document.getElementById('secondsInput');

const distanceSelect = document.querySelector('select');

const averageSpeedBtn = document.getElementById('averageSpeedBtn');

const para = document.querySelector('p');


averageSpeedBtn.addEventListener('click', function speed() {



            let meters = distance.value;

            let time = seconds.value;

            let formula =  ((meters  / time)*3600)/1000;

            para.textContent = 'Speed in Km/hr : ' + formula;

});