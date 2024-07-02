import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonInput,
  IonButton,
  IonImg
} from '@ionic/angular/standalone';
import { ApiService } from '../services/api.service';
import { PreferencesService } from '../services/preferences.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonInput,
    IonButton,
    IonImg
  ]
})
export class LoginPage implements OnInit {

  constructor(
    private api: ApiService,
    private preferences: PreferencesService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private router: Router
  ) { }

  email: string = '';
  password: string = '';
  screen: boolean = false;

  ngOnInit() {
  }


  ionViewWillEnter() {
    this.preferences.checkName('access_token').then((resp: any) => {
      if (resp.value) {
        this.router.navigateByUrl('/tabs/tab1');
      } else {
        this.screen = true;
      }
    });
  }

  login() {
    this.loadingController.create().then((loading) => {
      loading.present();
      let data = {
        email: this.email,
        password: this.password
      }
      this.api.login(data).subscribe((resp: any) => {
        loading.dismiss();
        this.preferences.setName('access_token', resp.access_token);
        this.router.navigateByUrl('tabs');
      }, () => {
        loading.dismiss();
        this.alertController.create({
          header: 'Erro no acesso',
          message: 'Tente novamente'
        }).then((alert) => {
          alert.present();
        })
      });
    });
  }

}
