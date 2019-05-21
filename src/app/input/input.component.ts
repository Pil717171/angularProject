import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit {
  
  constructor() { }

  onClickButton(e) {
    e.preventDefault()
    console.log(1)
  }

  onInput() : void {
    let input = <HTMLInputElement>document.querySelector('.form-control')
    console.log(input.value)
  }


  ngOnInit() {
  }

}
