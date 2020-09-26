import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Observable } from 'rxjs';
import { Service } from '../model/service.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  title = "Services"
  services: Observable<Service[]>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.services = this.productService.getService();
  }

}
