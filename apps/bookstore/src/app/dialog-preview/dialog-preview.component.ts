import { Book } from './../books.interface';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'locusview-uts-workshop-dialog-preview',
  templateUrl: './dialog-preview.component.html',
  styleUrls: ['./dialog-preview.component.scss'],
})
export class DialogPreviewComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Book) { }


}
