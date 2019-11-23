import { File } from 'src/app/file-manager/model/file';

export class Folder {
    public id: number;
    public name: string;
    public parentId?: number;
    public isFile: boolean;

    public toFileModel() {
        let file = new File();
        file.id = this.id;
        file.name = this.name;
        file.parentId = this.parentId;
        file.isFile = this.isFile;
        return file;
    }

    public fromFileModel(file: File) {
        this.id = file.id;
        this.name = file.name;
        this.parentId = file.parentId;
        this.isFile = file.isFile;
    }
}