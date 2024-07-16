import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Camera, CameraResultType } from '@capacitor/camera';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonFooter,
  IonHeader,
  IonImg,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { PreferencesService } from '../services/preferences.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
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
    IonFooter,
    IonButton
  ]
})
export class ProductPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private preferences: PreferencesService,
    private router: Router,
    private alertController: AlertController
  ) { }

  imageUrl: any = 'https://ionicframework.com/docs/img/demos/card-media.png';
  access_token: any;
  product_id: any = this.route.snapshot.params['product_id'];
  form_data_id: any = this.route.snapshot.params['form_data_id'];
  photo: boolean = false;

  ngOnInit() {
    this.preferences.checkName('access_token').then((resp: any) => {
      if (!resp.value) {
        this.router.navigateByUrl('/');
      } else {
        this.access_token = resp.value;
      }
    });
  }

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

  sendPhoto = async () => {
    if (!this.photo || !this.imageUrl) {
      console.error('Nenhuma foto disponível para envio');
      return;
    }

    // Converte Data URL para Blob
    const response = await fetch(this.imageUrl);
    const blob = await response.blob();

    // Criar um FormData para enviar a imagem
    const formData = new FormData();
    formData.append('image', blob, 'photo.jpg');
    formData.append('product_id', this.product_id);

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.access_token
      })
    };

    const url = 'https://ai.airbagszentrum.com/api/upload-image';

    this.http.post(url, formData, httpOptions).subscribe((data) => {
        this.alertController.create(({
          header: 'Atualizado',
          message: 'Pode avançar',
          backdropDismiss: false,
          buttons: [
            {
              text: 'Continuar',
              handler: () => {
                this.router.navigateByUrl('update-zcm-stock');
              }
            }
          ]
        })).then((alert) => {
          alert.present();
        });
      },
      (error) => {
        console.error('Erro ao enviar a imagem:', error);
      }
    );
  };


}
