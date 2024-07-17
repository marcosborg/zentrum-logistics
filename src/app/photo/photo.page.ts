import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Camera, CameraResultType } from '@capacitor/camera';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonImg,
  IonList,
  IonItem,
  IonLabel,
  IonFooter,
  IonButton,
  IonInput,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonIcon,
  IonText,
} from '@ionic/angular/standalone';
import { PreferencesService } from '../services/preferences.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { trash } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
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
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonImg,
    IonList,
    IonItem,
    IonLabel,
    IonFooter,
    IonButton,
    IonInput,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonIcon,
    IonText,
  ]
})
export class PhotoPage implements OnInit {

  constructor(
    private preferences: PreferencesService,
    private router: Router,
    private api: ApiService,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private route: ActivatedRoute
  ) {
    addIcons({ trash });
  }

  ngOnInit() {
    this.preferences.checkName('access_token').then((resp) => {
      if (!resp.value) {
        this.router.navigateByUrl('/');
      } else {
        this.access_token = resp.value;
      }
    });
  }

  access_token: any;
  imageUrl: any = 'https://ionicframework.com/docs/img/demos/card-media.png';
  photo: boolean = false;
  codes: any = [];
  form_data_id: any = this.route.snapshot.params['form_data_id'];

  takePicture = async () => {
    this.photo = false;
    const image = await Camera.getPhoto({
      quality: 50,
      allowEditing: false,
      resultType: CameraResultType.Base64
    });

    // Cria um novo elemento de imagem
    const img = new Image();
    img.src = 'data:image/jpeg;base64,' + image.base64String;

    img.onload = () => {
      // Cria um canvas para redimensionar a imagem
      const canvas = document.createElement('canvas');
      const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');

      if (ctx) {
        // Define a largura desejada
        const desiredWidth = 1000;
        const scaleFactor = desiredWidth / img.width;

        canvas.width = desiredWidth;
        canvas.height = img.height * scaleFactor;

        // Desenha a imagem redimensionada no canvas
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Converte o canvas de volta para uma imagem base64
        this.imageUrl = canvas.toDataURL('image/jpeg', 0.5); // Qualidade 50%
        this.photo = true;
      } else {
        console.error('Erro ao obter o contexto 2D do canvas');
      }
    };
  };

  sendPhoto() {
    this.loadingController.create().then((loading) => {
      loading.present();
      let data = {
        access_token: this.access_token,
        imageUrl: this.imageUrl
      }
      this.api.sendPhoto(data).subscribe((resp: any) => {
        this.codes = resp;
        loading.dismiss();
        if (this.codes.length == 0) {
          this.toastController.create({
            message: 'Não encontramos correspondência.',
            duration: 3000,
            position: 'bottom'
          }).then((toast) => {
            toast.present();
            this.photo = false;
          });
        }
      }, () => {
        loading.dismiss();
        this.toastController.create({
          message: 'Não encontramos correspondência.',
          duration: 3000,
          position: 'bottom'
        }).then((toast) => {
          toast.present();
          this.photo = false;
        });
      });
    });
  }

  searchStock() {
    this.loadingController.create().then((loading) => {
      loading.present();
      let data = {
        access_token: this.access_token,
        codes: this.codes
      }
      this.api.searchStock(data).subscribe((resp: any) => {
        loading.dismiss();
        this.preferences.setName('products', JSON.stringify(resp));
        this.preferences.setName('codes', JSON.stringify(this.codes));
        setTimeout(() => {
          this.router.navigateByUrl('products/' + this.form_data_id);
        }, 500);
      }, (err) => {
        loading.dismiss();
        console.log(err);
      });
    });
  }

  removeCode(index: number) {
    this.codes.splice(index, 1);
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }

  addCode() {
    this.codes.push('');
  }

}
