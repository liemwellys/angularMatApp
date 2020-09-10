import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  departments = [{ id: 1, value: 'Dep 1' },
               { id: 2, value: 'Dep 2' },
               { id: 3, value: 'Dep 3' }];

  ngOnInit(): void {
  }

}
