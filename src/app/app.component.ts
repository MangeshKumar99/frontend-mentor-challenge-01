import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'landing-page-design';
  changeIconFeature: boolean = false;
  changeIconCompany: boolean = false;
  isSideNavOpen: boolean = false;
  isFeatureClicked: boolean = false;
  isCompanyClicked: boolean = false;

  openNav(){
    this.isSideNavOpen = true;
    setTimeout(()=>{
      document.getElementById("mySidenav")!.style.width = "275px";
    })
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  closeNav(){
    document.getElementById("mySidenav")!.style.width = "0";
    this.isSideNavOpen = false;
    this.isFeatureClicked = false;
    this.isCompanyClicked = false;
    document.body.style.backgroundColor = "white";
  }

}
