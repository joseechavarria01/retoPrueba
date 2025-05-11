import { test, expect } from '@playwright/test';
import { HomeFlowerShopPage } from '../FlowerShopPages/HomeFlowerShopPage';
import { ProductDetailsPage } from '../FlowerShopPages/ProductDetailsPage';
import { CommonPage } from '../FlowerShopPages/common/CommonPage';
import { CartPage } from '../FlowerShopPages/CartPage';

test.describe('Agregar 2 productos al carro de compras.', async () => {
let homeFlowerShopPage: HomeFlowerShopPage;
let productDetailsPage: ProductDetailsPage;
let cartPage: CartPage;
let commonPage: CommonPage;


  test.beforeEach('go to sanangel.com.co', async ({page})=>{
    homeFlowerShopPage = new HomeFlowerShopPage(page);
    productDetailsPage = new ProductDetailsPage(page);
    cartPage = new CartPage(page);
    commonPage = new CommonPage(page);

    await page.goto('/');
  });

  test('1 producto con 2 cantidades', async () => {
   
   await homeFlowerShopPage.selectProduct('Presente');
   await productDetailsPage.addProduct(2);

  });

  test('2 producto con 5 cantidades', async () => {
   
    await homeFlowerShopPage.selectProduct('Presente');
    await productDetailsPage.addProduct(5);
    
    await commonPage.returnToStore();

    await homeFlowerShopPage.selectProduct('Baldado de amor');
    await productDetailsPage.addProduct(5);

    await cartPage.verifyCart();
   });

})




