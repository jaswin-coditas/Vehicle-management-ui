import { PageResponse } from './page-response';

export class CustomResponse<T> {
    success: boolean;
    message: string;
    data: PageResponse<T>
    errorCode: number;
    httpStatus: string;
}

