import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonPlus5,
    buttonLess5,
    buttonForest,
    buttonRain,
    buttonCafeteria,
    buttonFireplace,
} from "./elements.js"

export default function Events({controls, timer, sound}) {
    buttonPlay.addEventListener('click', () => {
        controls.play()
        timer.countdown()
        sound.pressButton()
    })
    
    buttonPause.addEventListener('click', () => {
        controls.pause()
        timer.hold()
        sound.pressButton()
    })
    
    buttonStop.addEventListener('click', () => {
        controls.reset()
        timer.reset()
        sound.pressButton()
    })

    buttonPlus5.addEventListener('click', () => {
        timer.plus5()
    })

    buttonLess5.addEventListener('click', () => {
        timer.less5()
    })

    buttonForest.addEventListener('click', () => {
        sound.Forest()

        buttonForest.classList.add('marked')
        buttonRain.classList.remove('marked')
        buttonCafeteria.classList.remove('marked')
        buttonFireplace.classList.remove('marked')
    })

    buttonRain.addEventListener('click', () => {
        sound.Rain() 
        
        buttonRain.classList.add('marked')
        buttonForest.classList.remove('marked')
        buttonCafeteria.classList.remove('marked')
        buttonFireplace.classList.remove('marked')
    })

    buttonCafeteria.addEventListener('click', () => {
        sound.Cafeteria()

        buttonCafeteria.classList.add('marked')
        buttonForest.classList.remove('marked')
        buttonRain.classList.remove('marked')
        buttonFireplace.classList.remove('marked')
    })

    buttonFireplace.addEventListener('click', () => {
        sound.Fireplace()
        
        buttonFireplace.classList.toggle('marked')
        buttonForest.classList.remove('marked')
        buttonRain.classList.remove('marked')
        buttonCafeteria.classList.remove('marked')
    })
    
    buttonSet.addEventListener('click', () => {
        let newMinutes = controls.getMinutes()
    
        if (!newMinutes) {
            timer.reset()
            return
        }
    
        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
    })

}