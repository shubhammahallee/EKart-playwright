import { test } from '@playwright/test'; 

test('home page test', async ({ page }) => {

    await page.goto('https://tutorialsninja.com/demo/index.php?route=common/home');

    await page.getByRole('textbox', { name: 'Search' }).fill('iphone');

    await page.getByRole('button', { name: '' }).click();
    await page.locator("//a[normalize-space()='iPhone']").click();
    await page.getByRole('button', {name: 'Add to Cart',exact: true}).click();
    await page.locator("//span[@id='cart-total']").click();

    await page.screenshot({ path: "./screenshots/screenshot_home.png" });    

});
