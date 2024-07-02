import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  url: string = 'https://ai.airbagszentrum.com/api/';
  //url: string = 'http://127.0.0.1:8000/api/';

  httpOptions = {
    headers: new HttpHeaders({
      'Accept-Language': 'pt'
    })
  };

  login(data: any) {
    return this.http.post(this.url + 'login', data, this.httpOptions);
  }

  getUser(data: any) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept-Language': 'pt',
        'Authorization': 'Bearer ' + data.access_token
      })
    };
    return this.http.get(this.url + 'get-user', this.httpOptions);
  }

  sendPhoto(data: any) {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept-Language': 'pt',
        'Authorization': 'Bearer ' + data.access_token
      })
    };

    return this.http.post(this.url + 'send-photo', data, this.httpOptions);
  }

  updateUser(data: any) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept-Language': 'pt',
        'Authorization': 'Bearer ' + data.access_token
      })
    };
    return this.http.post(this.url + 'update-user', data, this.httpOptions);
  }

  formDatas(data: any) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept-Language': 'pt',
        'Authorization': 'Bearer ' + data.access_token
      })
    };
    return this.http.get(this.url + 'form-datas/' + data.done + '/' + data.page, this.httpOptions);
  }

  formData(data: any) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept-Language': 'pt',
        'Authorization': 'Bearer ' + data.access_token
      })
    };
    return this.http.get(this.url + 'form-data/' + data.form_data_id, this.httpOptions);
  }

  searchStock(data: any) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept-Language': 'pt',
        'Authorization': 'Bearer ' + data.access_token
      })
    }
    return this.http.post(this.url + 'search-stock', data, this.httpOptions);
  }

  updateState(data: any) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept-Language': 'pt',
        'Authorization': 'Bearer ' + data.access_token
      })
    }
    return this.http.get(this.url + 'update-state/' + data.form_data_id, this.httpOptions);
  }

  prestashopCategories(data: any) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept-Language': 'pt',
        'Authorization': 'Bearer ' + data.access_token
      })
    }
    return this.http.get(this.url + 'prestashop-categories', this.httpOptions);
  }

  prestashopCategory(data: any) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept-Language': 'pt',
        'Authorization': 'Bearer ' + data.access_token
      })
    }
    return this.http.get(this.url + 'prestashop-category/' + data.category_id, this.httpOptions);
  }

  prestashopManufacturers(data: any) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept-Language': 'pt',
        'Authorization': 'Bearer ' + data.access_token
      })
    }
    return this.http.get(this.url + 'prestashop-manufacturers', this.httpOptions);
  }

  prestashopManufacturer(data: any) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept-Language': 'pt',
        'Authorization': 'Bearer ' + data.access_token
      })
    }
    return this.http.get(this.url + 'prestashop-manufacturer/' + data.manufacturer_id, this.httpOptions);
  }

  createProduct(data: any) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept-Language': 'pt',
        'Authorization': 'Bearer ' + data.access_token
      })
    }
    return this.http.post(this.url + 'create-product', data, this.httpOptions);
  }

  searchFormDatas(data: any) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept-Language': 'pt',
        'Authorization': 'Bearer ' + data.access_token
      })
    }
    return this.http.post(this.url + 'search-form-datas', data, this.httpOptions);
  }

  zcmCategories(data: any) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept-Language': 'pt',
        'Authorization': 'Bearer ' + data.access_token
      })
    }
    return this.http.get(this.url + 'zcm/orders/categories', this.httpOptions);
  }

  zcmSubCategories(data: any) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept-Language': 'pt',
        'Authorization': 'Bearer ' + data.access_token
      })
    }
    return this.http.get(this.url + 'zcm/orders/sub-categories/' + data.phase_id, this.httpOptions);
  }

  zcmUpdateState(data: any) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept-Language': 'pt',
        'Authorization': 'Bearer ' + data.access_token
      })
    }
    return this.http.post(this.url + 'zcm/orders/zcm-update-state', data, this.httpOptions);
  }
}
