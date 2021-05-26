import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { ChildToLoadComponent } from '../child-to-load/child-to-load.component';


@Component({
  selector: 'app-new-dialog',
  templateUrl: './new-dialog.component.html',
  styleUrls: ['./new-dialog.component.scss']
})
export class NewDialogComponent implements OnInit {
  
  //name = 'Angular';
  animal: string;
  name: string;
  childCompData = "child"
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(ChildToLoadComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit(): void {
  }

}
