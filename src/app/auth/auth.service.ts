import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userisAuthenticated = true;
  private _userId='xyz';

  get userIsAuthenticated() {
    return this._userisAuthenticated;
  }

  get userId() {
    return this._userId;
  }

  constructor() { }

  login() {
    this._userisAuthenticated = true;
  }

  logout() {
    this._userisAuthenticated = false;
  }
}
