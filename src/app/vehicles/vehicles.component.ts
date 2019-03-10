import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../shared/services/vehicle.service';
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  displayedColumns: string[] = ['no', 'vehicleNum', 'vehicleType', 'brand',
    'name', 'mobileNum', 'alterNateMobileNo', 'orgEmail',
    'personalEmailOne', 'personalEmailTwo'];
  dataSource: Vehicle[];
  constructor(private vehicleService: VehicleService) {
    this.dataSource = [];
    this.vehiclesLoaded = false;
   }

   vehiclesLoaded: boolean;
  ngOnInit() {
    this.vehicleService.getVehicles(0, 10).subscribe(response => {
      for (let vehicleDTO of response.data.currentPageData) {
        let vehicle: Vehicle = new Vehicle();
        vehicle.no = 1;
        vehicle.vehicleNum = vehicleDTO.vehicleNum;
        vehicle.vehicleType = vehicleDTO.vehicleType;
        vehicle.brand = vehicleDTO.brand;
        vehicle.name = vehicleDTO.owner.firstName + ' ' +
          vehicleDTO.owner.middleName + ' ' +
          vehicleDTO.owner.lastName;
        vehicle.mobileNum = vehicleDTO.owner.mobileNum;
        vehicle.alterNateMobileNo = vehicleDTO.owner.alterNateMobileNo;
        vehicle.orgEmail = vehicleDTO.owner.orgEmail;
        vehicle.personalEmailOne = vehicleDTO.owner.personalEmailOne;
        vehicle.personalEmailTwo = vehicleDTO.owner.personalEmailTwo;
        this.dataSource.push(vehicle);
      }
      console.log(this.dataSource);
      this.vehiclesLoaded = true;
    }
    );
  }

}
