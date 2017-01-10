import {Component } from '@angular/core';

import { MyList } from './Interfaces/list.interface';
import { Point } from './Interfaces/point.interface';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.view.html',
  styleUrls: ['app/app.component.css']
})

export class AppComponent  {

  public array1 : MyList = {header: h1,theList: POINTS1 };
  public array2 : MyList = {header: h2,theList: POINTS2 };
  public array3 : MyList = {header: h3,theList: POINTS3 };
  public array4 : MyList = {header: h4,theList: POINTS4 };
  public array5 : MyList = {header: h5,theList: POINTS5 };
  public array6 : MyList = {header: h6,theList: POINTS6 };
}

let h1 = "What do we offer?";
let POINTS1: Point[] = [
  {  "text": "•Access to multiple true-sec systems (approx -0.6)." },
  {  "text": "•Null sec pleasures: ores, ice, ratting, exploration."},
  {  "text": "•Low or no tax PI."},
  {  "text": "•Optional Use Corp buyback system."},
  {  "text": "•Access to an experienced veteran community." },
  {  "text": "•Excellent Jump Freighter services."},
  {  "text": "•No CTA requirements."},
  {  "text": "•Very Low Corp Tax Rate"}
];

let h2 = "What do we require?";
let POINTS2: Point[] = [
  {  "text": "•You’ve been playing the game long enough to acquire ~5 million skill points." },
  {  "text": "•Your main character is an “omega” clone (sorry no alpha pilots as mains)."},
  {  "text": "•You’re not a day old newb. Although we respect your interest, we do not accept players we consider very, very new to New Eden (without a reference)."},
  {  "text": "•You have a desire and ability to solo at times and to be in group activities at other times."}
];

let h3 = "CTA free!";
let POINTS3: Point[] = [
  {  "text": " We have developed relationships with partners and have clear terms: You will never be forced into a fleet. We encourage the full spectrum of organized fleet activity (pvp,ratting,mining, maybe a Epithal roam?).... our agreements enable us to make full use of the space we occupy."}
  ];


let h4 = "PVP is optional.";
let POINTS4: Point[] = [
  {  "text": " We have excellent access to both large scale and smaller scale fleets. You will have access to local level pvp after you join us. Approved members will have full exposure to coalition fleets."}
  ];

let h5 = "Industry everywhere!";
let POINTS5: Point[] = [
  {  "text": " Yes we mine! We have excellent access to Ice and  Ores. We also have some great PI in our area.Planetary Interaction (PI) is definitely a thing in our corporation. Builders are also welcome. We build lots of hulls in Full Spectrum Inc."}
];

let h6 = "Our Moto!";
let POINTS6: Point[] = [
  {  "text": " Full Spectrum Inc is a community of gaming adults with adult lives. REAL LIFE ALWAYS COMES FIRST. As responsible adults a lot of things can get in the way of our play time.  Our corp is built with real life pressures in mind. We have no expectations on how much or when you play. We just ask that you be on coms and alert when you are active."}
];
