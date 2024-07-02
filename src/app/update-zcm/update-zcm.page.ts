import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonItem, IonList, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { PreferencesService } from '../services/preferences.service';
import { ApiService } from '../services/api.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-update-zcm',
  templateUrl: './update-zcm.page.html',
  styleUrls: ['./update-zcm.page.scss'],
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
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonList,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonButton
  ]
})
export class UpdateZcmPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private preferences: PreferencesService,
    private router: Router,
    private api: ApiService,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) { }

  access_token: any;
  form_data_id: any = this.route.snapshot.params['form_data_id'];
  phase_id: any;
  phases: any = [];
  status_id: any;
  statuses: any = [];
  obs: string = '';
  codes: string = '';

  ngOnInit() {
    this.preferences.checkName('access_token').then((resp: any) => {
      if (!resp.value) {
        this.router.navigateByUrl('/');
      } else {
        this.access_token = resp.value;
        this.preferences.checkName('codes').then((resp: any) => {
          let codesArray: any[];

          try {
            codesArray = JSON.parse(resp.value);
          } catch (e) {
            console.error('Failed to parse JSON:', e);
            return;
          }

          if (Array.isArray(codesArray)) {
            this.codes = codesArray.join(', ');  // Unir os códigos em uma string separada por vírgulas
            this.obs = this.codes;  // Atribuir a string resultante à propriedade obs
          } else {
            console.error('Parsed JSON is not an array:', codesArray);
          }
        });
        let data = {
          access_token: this.access_token
        }
        this.loadingController.create().then((loading) => {
          loading.present();
          this.api.zcmCategories(data).subscribe((resp: any) => {
            loading.dismiss();
            this.phases = resp;
          });
        });
      }
    });
  }

  getStatuses() {
    this.loadingController.create().then((loading) => {
      loading.present();
      let data = {
        access_token: this.access_token,
        phase_id: this.phase_id
      }
      this.api.zcmSubCategories(data).subscribe((resp: any) => {
        this.statuses = resp;
        loading.dismiss();
      });
    });
  }

  zcmUpdateState() {
    if (!this.phase_id || !this.status_id || !this.obs) {
      this.alertController.create({
        header: 'Error de validação',
        message: 'Todos os campos são obrigatórios',
      }).then((alert) => {
        alert.present();
      });
    } else {
      this.loadingController.create().then((loading) => {
        loading.present();
        let data = {
          access_token: this.access_token,
          id: this.form_data_id,
          phase_id: this.phase_id,
          status_id: this.status_id,
          obs: this.obs
        }
        this.api.zcmUpdateState(data).subscribe((resp: any) => {
          loading.dismiss();
          if (resp.error) {
            this.alertController.create({
              header: 'Aviso',
              message: resp.message
            }).then((alert) => {
              alert.present();
            });
          } else {
            this.alertController.create({
              header: 'Atualizado com sucesso',
              message: 'Pode continuar para ...',
              backdropDismiss: false,
              buttons: [
                {
                  text: 'Por tratar',
                  handler: () => {
                    let data = {
                      access_token: this.access_token,
                      form_data_id: this.form_data_id
                    }
                    this.api.updateState(data).subscribe((resp) => {
                      this.router.navigateByUrl('/tabs/tab2');
                    });
                  }
                },
                {
                  text: 'Inserir peças',
                  handler: () => {
                    let data = {
                      access_token: this.access_token,
                      form_data_id: this.form_data_id
                    }
                    this.api.updateState(data).subscribe((resp) => {
                      this.router.navigateByUrl('/tabs/tab1');
                    });
                  }
                },
                {
                  text: 'Tratados',
                  handler: () => {
                    let data = {
                      access_token: this.access_token,
                      form_data_id: this.form_data_id
                    }
                    this.api.updateState(data).subscribe((resp) => {
                      this.router.navigateByUrl('/tabs/tab4');
                    });
                  }
                },
              ]
            }).then((alert) => {
              alert.present();
            });
          }
        }, (err) => {
          console.log(err);
          loading.dismiss();
          this.alertController.create({
            header: 'Aviso',
            message: 'Erro a processar a informação.'
          }).then((alert) => {
            alert.present();
          });
        });
      });
    }
  }

  updateState() {
    this.alertController.create({
      header: 'Atualizado com sucesso',
      message: 'Pode continuar para ...',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Por tratar',
          handler: () => {
            let data = {
              access_token: this.access_token,
              form_data_id: this.form_data_id
            }
            this.api.updateState(data).subscribe((resp) => {
              this.router.navigateByUrl('/tabs/tab2');
            });
          }
        },
        {
          text: 'Inserir peças',
          handler: () => {
            let data = {
              access_token: this.access_token,
              form_data_id: this.form_data_id
            }
            this.api.updateState(data).subscribe((resp) => {
              this.router.navigateByUrl('/tabs/tab1');
            });
          }
        },
        {
          text: 'Tratados',
          handler: () => {
            let data = {
              access_token: this.access_token,
              form_data_id: this.form_data_id
            }
            this.api.updateState(data).subscribe((resp) => {
              this.router.navigateByUrl('/tabs/tab3');
            });
          }
        },
      ]
    }).then((alert) => {
      alert.present();
    });
  }

}
