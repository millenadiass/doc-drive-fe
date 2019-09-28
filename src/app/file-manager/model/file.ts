export class File {


    constructor() {
    }

    public id: number;
    public name: string;
    public parentId?: number;
    public isFile: boolean = false;
    public parentFolder?: File;
}
