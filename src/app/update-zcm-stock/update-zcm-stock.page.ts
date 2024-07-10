import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonInput, IonItem, IonList, IonTextarea, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { PreferencesService } from '../services/preferences.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-update-zcm-stock',
  templateUrl: './update-zcm-stock.page.html',
  styleUrls: ['./update-zcm-stock.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons,
    IonBackButton,
    IonList,
    IonItem,
    IonInput,
    IonTextarea,
    IonFooter,
    IonButton
  ]
})
export class UpdateZcmStockPage implements OnInit {

  constructor(
    private preferences: PreferencesService,
    private router: Router,
    private api: ApiService,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) { }

  stock_id: number = 0;
  access_token: any;
  user: any;
  prestashop_id: any;
  category: string = '';
  brand_reference: string = '';
  name: string = '';
  manufacturer: string = '';
  manufacturer_reference: string = '';
  other_references: string = '';
  car_model: string = '';
  stock: number = 1;
  stock_location: string = '';
  observations: string = '';
  price: number = 0;

  ngOnInit() {
    this.loadingController.create().then((loading) => {
      loading.present();
      this.preferences.checkName('access_token').then((resp) => {
        if (!resp.value) {
          loading.dismiss();
          setTimeout(() => {
            this.router.navigateByUrl('/login');
          }, 500);
        } else {
          this.access_token = resp.value;
          let data = {
            access_token: this.access_token
          }
          this.api.getUser(data).subscribe((resp) => {
            this.user = resp;
            console.log(this.user);
            this.preferences.checkName('prestashop_id').then((resp) => {
              this.prestashop_id = resp.value;
              let data = {
                access_token: this.access_token,
                prestashop_id: this.prestashop_id
              }
              this.api.checkZcmStock(data).subscribe((resp: any) => {
                if (resp && Object.keys(resp).length > 0) {
                  loading.dismiss();
                  this.stock_id = resp.id;
                  this.category = resp.category;
                  this.brand_reference = resp.brand_reference;
                  this.name = resp.name;
                  this.manufacturer = resp.manufacturer;
                  this.manufacturer_reference = resp.manufacturer_reference;
                  this.other_references = resp.other_references;
                  this.car_model = resp.car_model;
                  this.stock = resp.stock ? resp.stock : 1;
                  this.stock_location = resp.stock_location;
                  this.observations = resp.observations;
                  this.price = resp.price ? resp.price : 0;
                } else {
                  this.api.prestashopProduct(data).subscribe((resp: any) => {
                    loading.dismiss();
                    this.name = resp.name[0].value;
                    this.manufacturer = resp.manufacturer_name;
                    this.other_references = resp.description[0].value;
                    this.category = resp.category_name;
                  });
                }
              });
            });
          });
        }
      });
    });
  }

  updateZcm() {
    this.loadingController.create().then((loading) => {
      loading.present();
      if (this.stock_id == 0) {
        let data = {
          access_token: this.access_token,
          prestashop_id: this.prestashop_id,
          category: this.category,
          brand_reference: this.brand_reference,
          name: this.name,
          manufacturer: this.manufacturer,
          manufacturer_reference: this.manufacturer_reference,
          other_references: this.other_references,
          car_model: this.car_model,
          stock: this.stock,
          stock_location: this.stock_location,
          observations: this.observations,
          price: this.price,
          email: this.user.email
        }
        this.api.prestashopCreateStock(data).subscribe((resp) => {
          loading.dismiss();
          console.log(resp);
          this.alertController.create({
            header: 'Criado com sucesso!',
            message: 'Pode continuar',
            backdropDismiss: false,
            buttons: [
              {
                text: 'Continuar',
                handler: () => {
                  this.router.navigateByUrl('/tabs/tab2');
                }
              }
            ]
          }).then((alert) => {
            alert.present();
          });
        });
      } else {
        let data = {
          stock_id: this.stock_id,
          access_token: this.access_token,
          prestashop_id: this.prestashop_id,
          category: this.category,
          brand_reference: this.brand_reference,
          name: this.name,
          manufacturer: this.manufacturer,
          manufacturer_reference: this.manufacturer_reference,
          other_references: this.other_references,
          car_model: this.car_model,
          stock: this.stock,
          stock_location: this.stock_location,
          observations: this.observations,
          price: this.price,
          email: this.user.email
        }
        this.api.prestashopUpdateStock(data).subscribe((resp) => {
          loading.dismiss();
          console.log(resp);
          this.alertController.create({
            header: 'Atualizado com sucesso!',
            message: 'Pode continuar',
            backdropDismiss: false,
            buttons: [
              {
                text: 'Continuar',
                handler: () => {
                  this.router.navigateByUrl('/tabs/tab2');
                }
              }
            ]
          }).then((alert) => {
            alert.present();
          });
        });
      }
    });

  }

}
