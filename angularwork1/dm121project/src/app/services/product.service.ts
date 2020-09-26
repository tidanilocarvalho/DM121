import { Injectable } from '@angular/core';
import { AppFirebaseService }  from '../app-firebase.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

const DATABASE_REF_SERVICES = 'services';

@Injectable()
export class ProductService {

  constructor(private appFirebaseService: AppFirebaseService) { }

}
