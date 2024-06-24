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
  IonInfiniteScroll,
  IonInfiniteScrollContent
} from '@ionic/angular/standalone';
import { PreferencesService } from '../services/preferences.service';
import { ApiService } from '../services/api.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoadingController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

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
    RouterLink,
    IonInfiniteScroll,
    IonInfiniteScrollContent
  ]
})
export class Tab4Page implements OnInit {

  constructor(
    private preferences: PreferencesService,
    private api: ApiService,
    private router: Router,
    private loadingController: LoadingController
  ) { }

  current_page: number = 0;
  last_page: number = 1;
  done: number = 1;

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.preferences.checkName('access_token').then((resp) => {
      if (!resp.value) {
        this.router.navigateByUrl('/');
      } else {
        this.access_token = resp.value;
        this.getFormDatas();
      }
    });
  }

  access_token: any;
  form_datas: any = [];

  getFormDatas() {
    if (this.current_page < this.last_page) {
      this.loadingController.create().then((loading) => {
        loading.present();
        let data = {
          access_token: this.access_token,
          page: this.current_page + 1,
          done: this.done
        }
        this.api.formDatas(data).subscribe((resp: any) => {
          console.log(resp);
          if (Array.isArray(resp.data)) {
            this.form_datas = [...this.form_datas, ...resp.data];  // Use spread operator to merge arrays
          } else {
            console.warn('Unexpected response format:', resp.data);
          }
          this.current_page = resp.current_page;
          this.last_page = resp.last_page;
          loading.dismiss();
        }, (err) => {
          console.log(err);
          loading.dismiss();
        });
      });
    }
  }

  onIonInfinite(ev: any) {
    this.getFormDatas();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}
