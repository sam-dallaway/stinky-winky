const input = document.getElementById('input');

// create web audio api elements
const audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();

// create Oscillator node
const oscillator = audioCtx.createOscillator();
oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);
oscillator.type = "sine";

oscillator.start();
gainNode.gain.value = 0;

notenames = new Map();
notenames.set("C", 261.6);
notenames.set("A", 440);
notenames.set("D", 293.7);
notenames.set("E", 329.6);

function frequency(pitch){
    gainNode.gain.setValueAtTime(100, audioCtx.currentTime);
    oscillator.frequency.setValueAtTime(pitch, audioCtx.currentTime);
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime + 1);
}
var usernotes = String(input.value);
function handle(){
    audioCtx.resume();
    gainNode.gain.value = 0;
    frequency(notenames.get(usernotes));
}