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

  ngOnInit(): void {
  }

}
