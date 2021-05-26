import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewDialogComponent } from '../new-dialog/new-dialog.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-child-to-load',
  templateUrl: './child-to-load.component.html',
  styleUrls: ['./child-to-load.component.scss']
})
export class ChildToLoadComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<NewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onNoClick(): void {
      this.dialogRef.close();
    }
  

  ngOnInit(): void {
  }

}
