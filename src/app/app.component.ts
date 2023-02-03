import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LinkService } from './link.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'landing-page-design';
  linkArray:any=[];

  constructor(private fb: FormBuilder,private linkService:LinkService){}

  linkForm = this.fb.group({
    link: ["", Validators.required]
  });
  get linkFormControl() {
    return this.linkForm.controls;
  }
  onSubmit(){
    this.linkService.shortenUrl(this.linkForm.value.link).subscribe((data:any)=>{
      console.log(data);
      this.linkArray.push(data?.result);
      this.linkForm.reset();
    })
  }
}
