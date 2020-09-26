import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class AppFirebaseService {

  constructor(private db: AngularFireDatabase) { }

  getDbReference(){
    this.db.database;
  }

  getListByRef(ref: string) {
    return this.db.list(ref);
  }
}