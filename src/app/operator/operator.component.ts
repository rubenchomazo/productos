import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Operating } from './service/operating.model';
import { OperatorService } from './service/operator.service';
@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css'],
})
export class OperatorComponent implements OnInit {
  breakpoint: number;
  valueFormControl: FormGroup;
  operatorFormControl: FormGroup;
  operatingModel: Operating;
  result: any;
  constructor(
    private operatorService: OperatorService,
    private formBuilder: FormBuilder
  ) {
    this.valueFormControl = formBuilder.group({
      value: '',
    });
    this.operatorFormControl = formBuilder.group({
      operator: '',
    });
  }

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 400 ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = event.target.innerWidth <= 400 ? 1 : 2;
  }

  addValue() {
    this.operatingModel = new Operating(
      (this.valueFormControl.value.token =
        'fbc9cc68-d2a9-47a8-9abe-9e438f3783bb'),
      this.valueFormControl.value.value,
      null
    );
    this.operatorService
      .addValue(this.operatingModel)
      .subscribe((data: any) => {
        console.log(data);
        this.result = data;
        this.valueFormControl.reset();
      });
  }

  doOperate() {
    this.operatingModel = new Operating(
      (this.valueFormControl.value.token =
        'fbc9cc68-d2a9-47a8-9abe-9e438f3783bb'),
      null,
      this.operatorFormControl.value.operator
    );
    this.operatorService.operate(this.operatingModel).subscribe((data: any) => {
      console.log(data);
      this.result = data;
      this.valueFormControl.reset();
      this.operatorFormControl.reset();
    });
  }
  getList() {
    this.operatorService.getAll().subscribe((data: any) => {
      console.log(data);
      this.result = data;
    });
  }
  cleanList() {
    this.operatorService.cleanList().subscribe((data: any) => {
      console.log(data);
      this.result = data;
    });
  }
}
