// app/routes/details.js
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DetailsRoute extends Route {
  @service productData;

  model() {
    return {
      products: this.productData.getProducts(),
    };
  }
}
