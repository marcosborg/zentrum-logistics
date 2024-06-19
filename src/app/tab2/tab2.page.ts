import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonNote
} from '@ionic/angular/standalone';
import { PreferencesService } from '../services/preferences.service';
import { ApiService } from '../services/api.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonNote,
    CommonModule,
    RouterLink
  ]
})
export class Tab2Page implements OnInit {

  constructor(
    private preferences: PreferencesService,
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.preferences.checkName('access_token').then((resp) => {
      if (!resp.value) {
        this.router.navigateByUrl('/');
      } else {
        this.access_token = resp.value;
        let data = {
          access_token: this.access_token
        }
        this.api.formDatas(data).subscribe((resp: any) => {
          this.form_datas = resp;
          console.log(resp);
        });
      }
    });
  }

  access_token: any;
  form_datas: any = [];

}
