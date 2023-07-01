import Sounds from './sounds.js'
export default function Timer({
    minutesDisplay, 
    secondsDisplay, 
    resetControls
}) {

    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)

    function updateDisplay(newMinutes, seconds) {
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2,"0")
        secondsDisplay.textContent = String(seconds).padStart(2,"0")
    }
    
    function reset() {
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }

    function plus5() {
        updateDisplay(Number(minutesDisplay.textContent) + 5, secondsDisplay.textContent)
    }

    function less5() {
        if(Number(minutesDisplay.textContent) - 5 < 0) {
            window.alert("Não é possível diminuir o tempo para menos que 0")
            return
        }
        updateDisplay(Number(minutesDisplay.textContent) - 5, secondsDisplay.textContent)
    }
    
    function countdown() {
        timerTimeOut = setTimeout(function() {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            let isFinished = minutes <= 0 && seconds <=0
    
            updateDisplay(minutes, 0)
    
            if(isFinished) {
                resetControls()
                updateDisplay()
                Sounds().timeEnd()
                return;
            }
    
            if(seconds <= 0 ) {
                seconds = 60
                --minutes
            }
    
            updateDisplay(minutes, String(seconds -1))
    
            countdown()
        }, 1000)// executa função callback em um determinado tempo em milissegundos
    }

    function updateMinutes(newMinutes) {
        minutes = newMinutes
    }

    function hold() {
        clearTimeout(timerTimeOut)
    }

    return {
        countdown,
        reset,
        updateDisplay,
        updateMinutes,
        hold,
        plus5,
        less5
    }

    /* É o mesmo que:
        let output = {
            countdown: countdown
        }
        return output
    */
}