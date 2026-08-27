import { test } from '@playwright/test';

test('Register Account', async ({ page }) => {

    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/register');

    await page.getByLabel('First Name').fill('John');
    await page.getByLabel('Last Name').fill('Cena');
    await page.getByLabel('E-Mail').fill('Johncennaa@mail.com');
    await page.getByLabel('Telephone').fill('766612536');

    await page.getByRole('textbox', { name: '* Password', exact: true }).fill('Password');
    await page.getByRole('textbox', { name: '* Password Confirm', exact: true }).fill('Password');

    await page.locator('input[type="checkbox"]').check();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByText('Your Account Has Been Created!');

    await page.screenshot({ path: "./screenshots/screenshot_register.png" });

});