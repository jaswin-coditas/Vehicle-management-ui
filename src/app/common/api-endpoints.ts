import { environment } from 'src/environments/environment';

export class ApiEndpoints {
    static GET_VEHICLES_API = environment.API_URL + 'vehicles?page=%d&size=%d';

}
