export class Usuario{
    _id?: number;
    name: string;
    password: string

    constructor(name: string, password: string){
        this.name = name;
        this.password = password;
    }
}