import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  constructor() { }

  setName = async (name: any, value: any) => {
    await Preferences.set({
      key: name,
      value: value,
    });
  };

  checkName = async (key: any) => {
    return await Preferences.get({ key: key });
  };

  removeName = async (key: any) => {
    await Preferences.remove({ key: key });
  };

}