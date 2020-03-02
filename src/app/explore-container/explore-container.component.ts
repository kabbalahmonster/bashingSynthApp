import { Component, OnInit, Input } from '@angular/core';
import * as Tone from 'tone';


@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
  synth:any;
  polySynth: any;

  myAudioContext:AudioContext;
  myGain:GainNode;    
  myShinyNewOsc:OscillatorNode;
  myShinyNewOsc2:OscillatorNode;  
  filter:BiquadFilterNode; 
  polyNote1: number;
  polyNote2: number;
  polyNote3: number;
  pluckNote1: number;
  notes:string[];


  constructor() { 
    this.myAudioContext = new AudioContext();
    this.myGain  = this.myAudioContext.createGain();    
    this.myShinyNewOsc = this.myAudioContext.createOscillator();
    this.myShinyNewOsc2 = this.myAudioContext.createOscillator();  
    this.filter = new BiquadFilterNode(this.myAudioContext);  
    this.synth = new Tone.PluckSynth({dampening:1000}).toMaster(); 
    this.polySynth = new Tone.PolySynth().toMaster();
    this.notes=['A4','B4','C4','D4','E4','F4','G4'];


  }

  ngOnInit() {

    this.initAudio();
  }


  initAudio():void {
    this.myGain.gain.value=0.5;
  this.myGain.connect(this.myAudioContext.destination);

// osc 1------------------
//this.myShinyNewOsc.type = 'sine';
//this.myShinyNewOsc.frequency.setValueAtTime(440, this.myAudioContext.currentTime); // value in hertz
//myShinyNewOsc.connect(myGain);
//this.myShinyNewOsc.start();
// osc 2------------------
//this.myShinyNewOsc2.type = 'sine';
//this.myShinyNewOsc2.frequency.setValueAtTime(440, this.myAudioContext.currentTime); // value in hertz
//myShinyNewOsc.connect(myGain);
//this.myShinyNewOsc.start();
this.filter.type='lowpass';
this.filter.frequency.value=500;

this.myShinyNewOsc.connect(this.filter);
this.myShinyNewOsc2.connect(this.filter);
this.filter.connect(this.myGain);
//this.myShinyNewOsc.start();
//this.myShinyNewOsc2.start();

  }

}
