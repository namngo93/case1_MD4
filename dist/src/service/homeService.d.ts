declare class HomeService {
    constructor();
    getAll: () => Promise<(import("mongoose").Document<unknown, any, import("../model/home").IHome> & import("../model/home").IHome & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    save: (home: any) => Promise<import("mongoose").Document<unknown, any, import("../model/home").IHome> & import("../model/home").IHome & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    private update;
    private findByID;
}
declare const _default: HomeService;
export default _default;
