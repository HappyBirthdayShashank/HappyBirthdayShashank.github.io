//<script src="node_modules/confetti-js/dist/index.min.js"></script>
import { ConfettiGenerator } from "confetti-js";

var confettiElement = document.getElementById('my-canvas');
var confettiSettings = {"target": confettiElement,"max":"80","size":"1","animate":true,"props":["circle","square","triangle","line",{"type":"svg","src":"site/hat.svg","size":25,"weight":0.2}],"colors":[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],"clock":"25","rotate":false,"width":"1440","height":"748","start_from_edge":false,"respawn":true};
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();