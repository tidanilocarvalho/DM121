import { Injectable } from '@angular/core';
import { AppFirebaseService }  from '../app-firebase.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Service } from '../model/service.model';

const DATABASE_REF_SERVICES = 'services';

@Injectable()
export class ProductService {

  constructor(private appFirebaseService: AppFirebaseService) { }

  getService(): Observable<Service[]>{
    return this.appFirebaseService.getListByRef(DATABASE_REF_SERVICES).valueChanges().pipe(map(response => {
      const services: Service[] = [];

      for(let key in response){
        const service: Service = <Service> response[key];
        services.push(service);
      }

      return services;
    }))
  }

}
