import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  public list: Array<any>;

  constructor() {
    this.list = [
      {
        title: 'By Hee Eun Chung',
        subtitle: 'February 06, 2023',
        link: 'https://images.vogue.it/Photovogue/820902a0-a64b-11ed-b27a-c913654f3c90_gallery.jpg'
      },
      {
        title: 'By Hee Eun Chung',
        subtitle: 'February 06, 2023',
        link: 'https://images.vogue.it/Photovogue/dbecc2e0-a64e-11ed-983a-c703e4016d41_gallery.jpg'
      },
      {
        title: 'By Hee Eun Chung',
        subtitle: 'February 06, 2023',
        link: 'https://images.vogue.it/Photovogue/0ac47db0-a64f-11ed-983a-c703e4016d41_gallery.jpg'
      },
      {
        title: 'By Hee Eun Chung',
        subtitle: 'February 06, 2023',
        link: 'https://images.vogue.it/Photovogue/e5723340-a64e-11ed-983a-c703e4016d41_admin-thumbnail.jpg'
      },
      {
        title: 'By Hee Eun Chung',
        subtitle: 'February 06, 2023',
        link: 'https://images.vogue.it/Photovogue/820902a0-a64b-11ed-b27a-c913654f3c90_gallery.jpg'
      },
      {
        title: 'By Hee Eun Chung',
        subtitle: 'February 06, 2023',
        link: 'https://images.vogue.it/Photovogue/0ac47db0-a64f-11ed-983a-c703e4016d41_gallery.jpg'
      },
      {
        title: 'By Hee Eun Chung',
        subtitle: 'February 06, 2023',
        link: 'https://images.vogue.it/Photovogue/dbecc2e0-a64e-11ed-983a-c703e4016d41_gallery.jpg'
      },
      {
        title: 'By Hee Eun Chung',
        subtitle: 'February 06, 2023',
        link: 'https://images.vogue.it/Photovogue/820902a0-a64b-11ed-b27a-c913654f3c90_gallery.jpg'
      },
      {
        title: 'By Hee Eun Chung',
        subtitle: 'February 06, 2023',
        link: 'https://images.vogue.it/Photovogue/0ac47db0-a64f-11ed-983a-c703e4016d41_gallery.jpg'
      },
      {
        title: 'By Hee Eun Chung',
        subtitle: 'February 06, 2023',
        link: 'https://images.vogue.it/Photovogue/820902a0-a64b-11ed-b27a-c913654f3c90_gallery.jpg'
      },
      {
        title: 'By Hee Eun Chung',
        subtitle: 'February 06, 2023',
        link: 'https://images.vogue.it/Photovogue/dbecc2e0-a64e-11ed-983a-c703e4016d41_gallery.jpg'
      },
    ]
  }

  getListFotos() {
    return this.list;
  }
}
