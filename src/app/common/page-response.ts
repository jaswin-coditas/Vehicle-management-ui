export class PageResponse<T> {
    totalCount: number;
    currentPageData: T[]
    currentPageNo: number;
    perPage: number;
}


