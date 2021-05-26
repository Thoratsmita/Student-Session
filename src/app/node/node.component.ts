import { Component, OnInit } from '@angular/core';
import { NodeServiceService } from '../node-service.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  constructor(private service: NodeServiceService) { }

  ngOnInit() {
    this.getDataFromApi();
  }

  getDataFromApi() {
    this.service.getData().subscribe((response) => {
      console.log('Response from API is ', response)
    }, (error) => {
      console.log('Error is', error);
    })
  }
}
