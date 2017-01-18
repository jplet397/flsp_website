/**
 * Created by JPTBB68 on 12/01/2017.
 */
import {Component} from '@angular/core';

import {InputLine} from '../Interfaces/inputLine.interface'


@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/Buyback/buyback.component.html',
  styleUrls: ['app/Buyback/buyback.component.css']
})

export class BuybackComponent {
  input: string;
  constructor() {
  }

  public reset() {
    this.input = "";
  }

  public calculatePrice() {
    let productList = this.inputSplitter(this.input);
    //get list of accepted products
    //remove not accepted out of productlist
    //calculate prices total and -15%
    //calculate total price + total price -15% + 15% of total price
  }

  public inputSplitter(theInput: string) {
    let inputLines = Array<InputLine>();
    for (let element of theInput.split('\n')) {
      let filler = element.split("\t");
      if (filler[1] === "") {
        filler[1] = "1";
      }
      inputLines.push({name: filler[0], number: parseInt(filler[1])});
    }
    return inputLines
  }
/*
  public outputCalculator(productList , priceList){
 let unknowns = Array<OutputLine>();
 let knows= Array<InputLine>();
 let exists : boolean = false;
 for(let element1 of productList){
 exists = false;
 for(let element2 of priceList){
 if(element1 == element2){
 knows.push(element1);
 exists = true;
 break;
 }
 }
 if(!exists){
 unknowns.push(element1)
 }
 }
 return {knows, unknowns}
 }
 */
}

class OutputLine{
  name: string;
  number: number;
  priceJita: number;
  totalPriceJita : number;
  priceCorp: number;
  totalPriceCorp: number;
}

