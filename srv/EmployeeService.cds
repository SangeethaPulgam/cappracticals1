using { ust.sangeetha.pulgam.db.master } from '../db/datamodel';
 
 service EmployeeService @(path: 'EmployeeService')
 {

    entity EmployeeSet@(odata.draft.enabled:true) as projection on master.employees;
 }