import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { StudentExamsPage } from '../student-exams/student-exams';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public Menu: MenuController ) {
    this.Menu.enable(true);
  }


  gotoExams()
  {
    this.navCtrl.push(StudentExamsPage);
  }
  
 
  
}
