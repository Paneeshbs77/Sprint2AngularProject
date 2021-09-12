import { Component, OnInit } from '@angular/core';
import { Flat } from '../../../models/flat';
import { FlatService } from '../../../services/flat.service';

@Component({
  selector: 'app-flat-list',
  templateUrl: './flat-list.component.html',
  styleUrls: ['./flat-list.component.css']
})
export class FlatListComponent implements OnInit {

  flats : Flat[];
  
  constructor(private service:FlatService) { }

  ngOnInit(): void {
    this.loadData();
    // for (let i of this.flats) {
    //   console.log(i)
    //}
  }

  header: string = "List of Flats";

  failMessage: string = null;
  message: string = null;

  delete(flatNo:number): void{
    this.service.deleteFlat(flatNo).subscribe(
      (response) => {
        this.message = response
        this.loadData();
        console.log(this.message);
      },
      (errorResponse) => {
        this.message = errorResponse.error.errorMessage
        this.loadData();
      }
      )
  }

  loadData(): void {
    this.service.getAllFlats().subscribe(
      (data) => {
        this.flats = data;
      },
      (errorResponse) => {
        this.failMessage = errorResponse.error.errorMessage
      }
    )
  }
  updateComplete(message: string) {
    this.message = message;
  }
}
