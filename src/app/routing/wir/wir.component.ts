import { Component } from '@angular/core';

@Component({
  selector: 'app-wir',
  templateUrl: './wir.component.html',
  styleUrls: ['./wir.component.css']
})
export class WirComponent {
  activeImg: any;
  activeDiv: any
  verImagenActiva(){
    setTimeout(() =>{
      this.activeImg = document.getElementsByClassName("carousel-item active")
      setTimeout(() =>{
        this.activeDiv = this.activeImg[0].getElementsByClassName("d-block");
        this.activeDiv = String(this.activeDiv[0].src)
        console.log(this.activeDiv)
      }, 100);
    }, 900);
    //this.activeImg = document.getElementsByClassName("carousel-item active")
    console.log("hola");
  } 



}
