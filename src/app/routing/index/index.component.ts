import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  constructor(
    private router: Router
  ){

  }
  
  async navigate(id: String){
    console.log(this.router)
    this.router.navigate(['/',id]);
  }
  
}
