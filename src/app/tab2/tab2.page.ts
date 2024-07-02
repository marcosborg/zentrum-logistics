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
  IonInfiniteScrollContent,
  IonSearchbar,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonIcon
} from '@ionic/angular/standalone';
import { PreferencesService } from '../services/preferences.service';
import { ApiService } from '../services/api.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlertController, LoadingController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { archive } from 'ionicons/icons';

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
    RouterLink,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonSearchbar,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonIcon
  ]
})
export class Tab2Page implements OnInit {

  constructor(
    private preferences: PreferencesService,
    private api: ApiService,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {
    addIcons({ archive });
  }

  current_page: number = 0;
  last_page: number = 1;
  done: number = 0;

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.preferences.checkName('access_token').then((resp) => {
      if (!resp.value) {
        this.router.navigateByUrl('/');
      } else {
        this.access_token = resp.value;
        this.getFormDatasNoPagination();
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
          if (Array.isArray(resp.data)) {
            this.form_datas = [...this.form_datas, ...resp.data];
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

  getFormDatasNoPagination() {
    this.loadingController.create().then((loading) => {
      loading.present();
      let data = {
        access_token: this.access_token,
        page: 1,
        done: this.done
      }
      this.form_datas = [];
      this.api.formDatas(data).subscribe((resp: any) => {
        if (Array.isArray(resp.data)) {
          this.form_datas = [...this.form_datas, ...resp.data];
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

  onIonInfinite(ev: any) {
    this.getFormDatas();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  search(ev: any) {
    let search = ev.detail.value;
    if (search.length > 3) {
      let data = {
        access_token: this.access_token,
        done: this.done,
        search: search
      }
      this.api.searchFormDatas(data).subscribe((resp: any) => {
        this.form_datas = resp;
      });
    }
  }

  cancel() {
    this.getFormDatas();
  }

  updateState(form_data_id: any) {
    this.alertController.create({
      header: 'Validação',
      message: 'Tem a certeza que quer passar este item para os itens tratados?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Dar como tratado',
          handler: () => {
            this.loadingController.create().then((loading) => {
              loading.present();
              let data = {
                access_token: this.access_token,
                form_data_id: form_data_id
              }
              this.api.updateState(data).subscribe((resp) => {
                loading.dismiss();
                this.getFormDatasNoPagination();
              });
            });
          }
        }
      ]
    }).then((alert) => {
      alert.present();
    });
  }

}
