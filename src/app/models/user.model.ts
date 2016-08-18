export class User  {

  _id:number;
  _username: string;
  _email: string;

  constructor(id: number, name: string, email: string) {
    this._id = id;
    this._username = name;
    this._email = email;
  }

  setId(id:number) {
    this._id = id;
  }

  getId() {
    return this._id;
  }

  setUsername(username: string) {
    this._username = username;
  }

  getUsername(){
    return this._username;
  }

  setEmail(email: string) {
    this._email = email;
  }

  getEmail() {
    return this._email;
  }

}
