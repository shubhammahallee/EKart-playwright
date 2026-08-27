import {test} from '@playwright/test';

test('Login test',async({page})=>{
    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
    await page.getByLabel('E-Mail Address').fill('asustuf3005@gmail.com');
    await page.getByLabel('Password').fill('Password');
    await page.getByRole('button',{name:'Login'}).click();
    await page.screenshot({ path: "./screenshots/screenshot_login.png" });

});