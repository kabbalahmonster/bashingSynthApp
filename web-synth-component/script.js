const myAudioContext = new AudioContext();
const myGain = myAudioContext.createGain();
myGain.gain.value=0.5;
myGain.connect(myAudioContext.destination);

// osc 1------------------
const myShinyNewOsc = myAudioContext.createOscillator();
myShinyNewOsc.type = 'sine';
myShinyNewOsc.frequency.setValueAtTime(440, myAudioContext.currentTime); // value in hertz
//myShinyNewOsc.connect(myGain);
myShinyNewOsc.start

// osc 2==================
const myShinyNewOsc2 = myAudioContext.createOscillator();
myShinyNewOsc2.type = 'square';
myShinyNewOsc2.frequency.setValueAtTime(440, myAudioContext.currentTime); // value in hertz
//myShinyNewOsc2.connect(myGain);
myShinyNewOsc2.start

const filter = new BiquadFilterNode(myAudioContext);
filter.type.value='bandpass';
filter.frequency.value='500';

myShinyNewOsc.connect(filter);
myShinyNewOsc2.connect(filter);
filter.connect(myGain);