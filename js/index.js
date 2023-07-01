import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import { 
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    minutesDisplay,
    secondsDisplay,
    buttonPlus5,
    buttonLess5,

} from "./elements.js"

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonPlus5,
    buttonLess5,

})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})

const sound = Sound()

Events({controls, timer, sound})