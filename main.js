class TrafficLight {
    constructor(redId, yellowId, greenId, messageId) {
        this.redLight = document.getElementById('red');
        this.yellowLight = document.getElementById('yellow');
        this.greenLight = document.getElementById('green');
        this.message = document.getElementById('message');
    }

    resetLights() {
        // Сбрасываем все цвета на "серый"
        this.redLight.style.backgroundColor = 'grey';
        this.yellowLight.style.backgroundColor = 'grey';
        this.greenLight.style.backgroundColor = 'grey';
        this.message.innerHTML = '';
    }

    setLight(color) {
        this.resetLights();

        switch (color) {
            case 'красный':
                this.redLight.style.backgroundColor = 'red';
                this.message.innerHTML = 'STOP';
                break;
            case 'желтый':
                this.yellowLight.style.backgroundColor = 'yellow';
                this.message.innerHTML = 'WAIT';
                break;
            case 'зеленый':
                this.greenLight.style.backgroundColor = 'green';
                this.message.innerHTML = 'GO';
                break;
            default:
                alert('Введите правильный цвет!!!');
                break;
        }
    }
}

// Инициализация светофора
const trafficLight = new TrafficLight('red', 'yellow', 'green', 'message');

const userInput = prompt("Введите цвет светофора: красный, желтый, зеленый").toLowerCase();
trafficLight.setLight(userInput);
