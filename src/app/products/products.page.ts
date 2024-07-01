import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonText,
  IonBadge,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonInput,
} from '@ionic/angular/standalone';
import { PreferencesService } from '../services/preferences.service';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonBackButton,
    IonButtons,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonText,
    IonBadge,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonInput,
  ]
})
export class ProductsPage implements OnInit {

  constructor(
    private preferences: PreferencesService,
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
  ) { }

  access_token: any;
  products: any = [];
  form_data_id: any;
  codes: any = [];
  form_data: any;
  categories: any = [];
  category_id: any;
  manufacturers: any = [];
  manufacturer_id: any;
  price: any = 0;
  part_name: string = '';

  ngOnInit() {
    this.preferences.checkName('access_token').then((resp: any) => {
      if (!resp.value) {
        this.router.navigateByUrl('/');
      } else {
        this.loadingController.create().then((loading) => {
          loading.present();
          this.access_token = resp.value;
          this.form_data_id = this.route.snapshot.params['form_data_id'];
          this.preferences.checkName('products').then((resp: any) => {
            if (resp.value != 'null') {
              loading.dismiss();
              this.products = JSON.parse(resp.value).products;
            } else {
              if (this.form_data_id == 0) {
                let data = {
                  access_token: this.access_token,
                }
                this.api.prestashopCategories(data).subscribe((resp: any) => {
                  this.categories = resp.categories;
                  this.api.prestashopManufacturers(data).subscribe((resp: any) => {
                    this.manufacturers = resp.manufacturers;
                    this.preferences.checkName('codes').then((resp: any) => {
                      this.codes = JSON.parse(resp.value);
                      loading.dismiss();
                    });
                  });
                });
              } else {
                let data = {
                  access_token: this.access_token,
                  form_data_id: this.form_data_id
                }
                this.api.formData(data).subscribe((resp: any) => {
                  this.form_data = resp;
                  this.api.prestashopCategories(data).subscribe((resp: any) => {
                    this.categories = resp.categories;
                    this.api.prestashopManufacturers(data).subscribe((resp: any) => {
                      this.manufacturers = resp.manufacturers;
                      this.preferences.checkName('codes').then((resp: any) => {
                        this.codes = JSON.parse(resp.value);
                        loading.dismiss();
                      });
                    });
                  });
                });
              }
            }
          });
        });
      }
    });
  }

  updateStock(product_id: any) {
    this.alertController.create({
      header: 'Confirmação',
      message: 'O anúncio já existe.',
      buttons: [
        {
          text: 'Confirmar',
          handler: () => {
            let data = {
              access_token: this.access_token,
              form_data_id: this.form_data_id
            }
            this.api.updateState(data).subscribe((resp) => {
              this.alertController.create({
                header: 'Atualizado',
                message: 'Pode continuar.',
                backdropDismiss: false,
                buttons: [
                  {
                    text: 'Continuar',
                    handler: () => {
                      window.location.href = "/tabs/tab2"
                    }
                  }
                ]
              }).then((alert) => {
                alert.present();
              });
            });
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ],
    }).then((alert) => {
      alert.present();
    });
  }

  createProduct() {
    if (!this.category_id || !this.manufacturer_id) {
      this.alertController.create({
        header: 'Validação',
        message: 'Todos os campos são obrigatórios'
      }).then((alert) => {
        alert.present();
      });
    } else {
      this.loadingController.create().then((loading) => {
        loading.present();
        let data = {
          access_token: this.access_token,
          category_id: this.category_id,
        };
        this.api.prestashopCategory(data).subscribe((resp1: any) => {
          let data = {
            access_token: this.access_token,
            manufacturer_id: this.manufacturer_id,
          }
          this.api.prestashopManufacturer(data).subscribe((resp: any) => {
            let manufacturer_name = resp.manufacturers[0].name;
            let references = this.codes.join(', ');
            let product_name = {};
            if (this.form_data_id == 0) {
              product_name = {
                0: resp1.categories[0].name[0].value + ' ' + manufacturer_name + ' ' + this.part_name + ' ' + references,
                1: resp1.categories[0].name[1].value + ' ' + manufacturer_name + ' ' + this.part_name + ' ' + references,
                2: resp1.categories[0].name[2].value + ' ' + manufacturer_name + ' ' + this.part_name + ' ' + references,
                3: resp1.categories[0].name[3].value + ' ' + manufacturer_name + ' ' + this.part_name + ' ' + references,
              };
            } else {
              product_name = {
                0: resp1.categories[0].name[0].value + ' ' + manufacturer_name + ' ' + this.form_data.data[9].value + ' ' + references,
                1: resp1.categories[0].name[1].value + ' ' + manufacturer_name + ' ' + this.form_data.data[9].value + ' ' + references,
                2: resp1.categories[0].name[2].value + ' ' + manufacturer_name + ' ' + this.form_data.data[9].value + ' ' + references,
                3: resp1.categories[0].name[3].value + ' ' + manufacturer_name + ' ' + this.form_data.data[9].value + ' ' + references,
              };
            }

            let product_description = {
              0: references,
              1: references,
              2: references,
              3: references,
            }
            let data = {
              access_token: this.access_token,
              id_category: this.category_id,
              id_manufacturer: this.manufacturer_id,
              reference: this.codes[0],
              price: this.price,
              name: product_name,
              description: product_description
            }
            this.api.createProduct(data).subscribe((resp: any) => {
              loading.dismiss();
              let product_id = resp.id;
              if (this.form_data_id != 0) {
                this.router.navigateByUrl('/product/' + product_id + '/' + this.form_data_id);
              } else {
                loading.dismiss();
                setTimeout(() => {
                  this.router.navigateByUrl('/product/' + product_id + '/0');
                }, 1000);
              }
            });
          });
        });
      });
    }
  }
}
