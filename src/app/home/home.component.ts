import { Component, OnInit } from '@angular/core';
import data from '../mobile.json'
import {MatGridListModule} from '@angular/material/grid-list';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
 
  

  mobileData : mobile[] = [];
  searchText: string = '';
  constructor() { }

  ngOnInit(): void {
  
    this.mobileData = JSON.parse(JSON.stringify(data)).mobile ;
    console.log(this.mobileData);
  }

  search(){

    this.mobileData = this.mobileData.filter(x=>x.productDescription === this.searchText)

  }

}

export interface mobile{
  productName: string;
  productDescription: string;
  productAbout1: string;
  productAbout2: string;
  productAbout3: string;
  productUrl: string;
  actualPrice: string;
  discountedPrice:string;
  perOffer: string;
  productImageUrl: string;

}
