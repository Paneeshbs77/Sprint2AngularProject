import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flat } from '../../../models/flat';
import { FlatService } from '../../../services/flat.service';

@Component({
  selector: 'app-create-flat',
  templateUrl: './create-flat.component.html',
  styleUrls: ['./create-flat.component.css']
})
export class CreateFlatComponent implements OnInit {

  message: string = null;
  validationMessages: string = null;

  constructor(private service: FlatService, private router: Router) { }

  ngOnInit() { }

  msgClass: string;

  createNew(data: Flat) {
    this.service.addFlat(data).subscribe(
      (response) => {
        this.message = response
        this.msgClass = 'alert alert-success'
        this.validationMessages = null;
        console.log(this.message);
      },
      (fail) => {
        let errors = JSON.parse(fail.error);
        this.message = errors.details;
        this.validationMessages = fail.error.error;
        this.msgClass = 'alert alert-danger'
      }
    )
  }

  gotoList() {
    this.router.navigate(["flatList"])
  }

}

// (fail) => {
//   // console.log(fail.error);
//   let errors = JSON.parse(fail.error);
//   // alert(errors.details);
  
//   this.message = errors.details;
  
//   // console.log(this.message);
//   this.validationMessages = fail.error.error;
//   this.msgClass = 'alert alert-danger'
//   // this.validationMessages = fail.error.errors;
//   // console.log(fail);
// }




