import { Component, OnInit } from '@angular/core';
import { Machine } from '../../models/machine.model'
import { MachineService } from '../../services/machine.service';

@Component({
  moduleId: module.id,
  selector: '<app-machines></app-machines>',
  templateUrl : 'machines.component.html'
})
export class MachinesComponent {
  isAddMachineFormOpen:boolean = false;
  machines:any = [
    {
      "id": 1,
      "hostname": "test1.idc.blr.com",
      "ip_address": "10.103.1.194",
      "program": "MR",
      "is_qualified": false
    },
    {
      "id": 2,
      "hostname": "test2.idc.blr.com",
      "ip_address": "10.103.1.197",
      "program": "CT",
      "is_qualified": true
    },
    {
      "id": 3,
      "hostname": "test1.idc.blr.com",
      "ip_address": "10.103.1.19",
      "program": "CT",
      "is_qualified": false
    }
  ];

  constructor(private _machineService: MachineService){}

  ngOnInit() {}
}
