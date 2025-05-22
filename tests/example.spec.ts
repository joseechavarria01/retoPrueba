import { test, expect } from '@playwright/test';
import { HomeFlowerShopPage } from '@pages/HomeFlowerShopPage';
import { ProductDetailsPage } from '@pages/ProductDetailsPage';
import { CommonPage } from '@pages/common/CommonPage';
import { CartPage } from '@pages/CartPage';
import { PRODUCT1, PRODUCT2, QUANTITY_PRODUCT1, QUANTITY_PRODUCT2 } from '../utils/Constants';

test.describe('Agregar 2 productos al carro de compras.', () => {
let homeFlowerShopPage: HomeFlowerShopPage;
let productDetailsPage: ProductDetailsPage;
let cartPage: CartPage;
let commonPage: CommonPage;


  test.beforeEach('go to sanangel.com.co', async ({page})=> {
    homeFlowerShopPage = new HomeFlowerShopPage(page);
    productDetailsPage = new ProductDetailsPage(page);
    cartPage = new CartPage(page);
    commonPage = new CommonPage(page);

    await page.goto('/');
  });

  test('1 producto con 2 cantidades', async () => {
   
   await homeFlowerShopPage.selectProduct(PRODUCT1);
   await productDetailsPage.addProduct(QUANTITY_PRODUCT1);

  });

  test('2 producto con 5 cantidades', async () => {
   
    await homeFlowerShopPage.selectProduct(PRODUCT1);
    await productDetailsPage.addProduct(QUANTITY_PRODUCT2);
    
    await commonPage.returnToStore();

    await homeFlowerShopPage.selectProduct(PRODUCT2);
    await productDetailsPage.addProduct(QUANTITY_PRODUCT2);

    await cartPage.verifyCart();
   });
  
})




