import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonNote,
  IonBackButton,
  IonButtons,
  IonFab,
  IonFabButton,
  IonIcon
} from '@ionic/angular/standalone';
import { PreferencesService } from '../services/preferences.service';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { camera } from 'ionicons/icons';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
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
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonNote,
    IonBackButton,
    IonButtons,
    IonFab,
    IonFabButton,
    IonIcon,
    RouterLink
  ]
})
export class RequestPage implements OnInit {

  constructor(
    private preferences: PreferencesService,
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    addIcons({ camera });
  }

  ngOnInit() {
    this.preferences.checkName('access_token').then((resp: any) => {
      if (!resp.value) {
        this.router.navigateByUrl('/');
      } else {
        this.access_token = resp.value;
        let data = {
          access_token: this.access_token,
          form_data_id: this.form_data_id
        }
        this.api.formData(data).subscribe((resp) => {
          this.form_data = resp;
          console.log(this.form_data);
        });
      }
    });
  }

  access_token: any;
  form_data_id = this.route.snapshot.params['form_data_id'];
  form_data: any;

}
