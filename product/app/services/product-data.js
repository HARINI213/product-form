// app/services/product-data.js
import Service from '@ember/service';

export default class ProductDataService extends Service {
  products = [];

  addProduct(product) {
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }
}
