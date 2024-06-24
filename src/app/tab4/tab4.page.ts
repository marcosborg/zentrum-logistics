import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonNote,
  LoadingController
} from '@ionic/angular/standalone';
import { PreferencesService } from '../services/preferences.service';
import { ApiService } from '../services/api.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
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
export class Tab4Page implements OnInit {

  constructor(
    private preferences: PreferencesService,
    private api: ApiService,
    private router: Router,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.preferences.checkName('access_token').then((resp) => {
      if (!resp.value) {
        this.router.navigateByUrl('/');
      } else {
        this.access_token = resp.value;
        this.loadingController.create().then((loading) => {
          loading.present();
          let data = {
            access_token: this.access_token,
            done: true
          }
          this.api.formDatas(data).subscribe((resp: any) => {
            this.form_datas = resp;
            loading.dismiss();
          });
        });
      }
    });
  }

  access_token: any;
  form_datas: any = [];

}
