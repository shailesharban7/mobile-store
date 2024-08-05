import { Component,OnInit } from '@angular/core';
import data from '../app/mobile.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  mobileData : mobile[] = [];
  title = 'LMS';

  ngOnInit(): void {
  
    this.mobileData = JSON.parse(JSON.stringify(data)).mobile ;
    console.log(this.mobileData);
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
