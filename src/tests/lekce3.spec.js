import { test } from "@playwright/test";

test("should open login page", async ({ page }) => {
    await page.goto("/prihlaseni");

    const email = page.getByLabel('Email');
    console.log("Email pole je viditelné " + await email.isVisible());
    console.log("Email pole je viditelné " + await email.isEditable());

    const heslo = page.getByLabel('Heslo')
    console.log("Email pole je viditelné " + await heslo.isVisible());
    console.log("Email pole je viditelné " + await heslo.isEditable());

    const tlacitko = page.getByRole('button', { name: 'Přihlásit' });
    console.log("Přihlášení tlačítko s textem " + await tlacitko.textContent())

    await email.fill(username)
    await heslo.fill(password)
    await tlacitko.click()
});