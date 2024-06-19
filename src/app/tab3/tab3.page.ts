import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonInput,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButtons,
} from '@ionic/angular/standalone';
import { PreferencesService } from '../services/preferences.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonInput,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    CommonModule,
    FormsModule,
    IonButtons,
  ],
})
export class Tab3Page implements OnInit {
  constructor(
    private preferences: PreferencesService,
    private router: Router,
    private api: ApiService,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.preferences.checkName('access_token').then((resp) => {
      if (!resp.value) {
        this.router.navigateByUrl('/');
      } else {
        this.access_token = resp.value;
        this.getUser();
      }
    });
  }

  access_token: any;
  user: any;
  name: any = '';
  email: any = '';
  password: any = '';
  password_confirm: any = '';

  getUser() {
    let data = {
      access_token: this.access_token
    }
    this.api.getUser(data).subscribe((resp: any) => {
      this.user = resp;
      this.name = resp.name;
      this.email = resp.email;
    });
  }

  updateUser() {
    this.loadingController.create().then((loading) => {
      loading.present();
      let data = {
        access_token: this.access_token,
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirm: this.password_confirm
      }
      this.api.updateUser(data).subscribe(() => {
        loading.dismiss();
        this.alertController.create({
          header: 'Atualizado com sucesso',
          message: 'Pode continuar',
        }).then((alert) => {
          alert.present();
        });
      }, () => {
        loading.dismiss();
        this.alertController.create({
          header: 'Erro de validação',
          message: 'Todos os dados são obrigatórios'
        }).then((alert) => {
          alert.present();
        })
      });
    });
  }

  logout(){
    this.preferences.removeName('access_token').then(() => {
      this.router.navigateByUrl('/');
    });
  }
}
