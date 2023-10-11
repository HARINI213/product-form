// app/components/product-form.js
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ProductFormComponent extends Component {
  @service productData;
  productName = '';
  productPrice = '';
  productDescription = '';
  productQuantity = '';
  @service router; // Inject the router service


  @action
  saveProduct(event) {
    event.preventDefault();
    const { productName, productPrice ,productDescription,productQuantity} = this;
    this.productData.addProduct({
      name: productName,
      price: parseFloat(productPrice),
      description : productDescription,
      quantity  : productQuantity
    });
    this.router.transitionTo('details');
    this.productName = '';
    this.productPrice = '';
    this.productDescription=''
    this.productQuantity=''
  }
}
