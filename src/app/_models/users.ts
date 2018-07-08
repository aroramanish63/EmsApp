import { BaseModel } from './BaseModel';

export class Users extends BaseModel{
    public users_id:string;
    public name:string;
    public date_entered:string;
    public date_modified:string;
    public created_by:string;
    public modified_by:string;
    public deleted:number;
    public first_name:string;
    public last_name:string;
    public email_addres:string;
    public mobile_no:string;
    public login_mode:number;
    public login_from_where:string;
    public last_login:string;
    public status:string;
    public sessionkey:string;
}