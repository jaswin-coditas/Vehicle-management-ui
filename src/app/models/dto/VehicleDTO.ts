import { OwnerDTO } from './OwnerDTO';

export class VehicleDTO {
    id: string;
    vehicleNum: string;
    vehicleType: string;
    brand: string;
    owner: OwnerDTO;
}
