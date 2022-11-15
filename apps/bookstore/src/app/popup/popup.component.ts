import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'locusview-uts-workshop-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {

  toggle = true;

  changeToggle(){
    this.toggle = !this.toggle;
  }
  

}
