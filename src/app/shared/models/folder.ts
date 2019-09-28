import { File } from 'src/app/file-manager/model/file';

export class Folder {
    public id: number;
    public name: string;
    public parentId?: number;

    public toFileModel() {
        let file = new File();
        file.id = this.id;
        file.isFile = false;
        file.name = this.name;
        file.parentId = this.parentId;
        return file;
    }
}