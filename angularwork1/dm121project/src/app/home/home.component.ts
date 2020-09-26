import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsLetterForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
   this.newsLetterForm = this.fb.group({
    email: ['', Validators.email]
   });
  }

  onSubmit() {}

}
