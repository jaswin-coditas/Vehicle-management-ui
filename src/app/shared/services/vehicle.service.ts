import { Injectable } from '@angular/core';
import { sprintf } from 'sprintf-js';
import { HttpClient } from '@angular/common/http';
import { ApiEndpoints } from 'src/app/common/api-endpoints';
import { CustomResponse } from 'src/app/common/custom-response';
import { VehicleDTO } from 'src/app/models/dto/VehicleDTO';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpClient: HttpClient) { }

  getVehicles(page: number, size: number) {
    console.log('Fetching vehicle details');
    return this.httpClient.get<CustomResponse<VehicleDTO>>
      (sprintf(ApiEndpoints.GET_VEHICLES_API, page, size));
  }
}
