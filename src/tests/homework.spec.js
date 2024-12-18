import { test } from "@playwright/test";
import { password, username } from '../fixtures/fixtures.js';

//1.DOMÁCÍ ÚKOL
test("should open login page", async ({ page }) => {
    //přechod na stránku přihlášení + výpis do konzole
    await page.goto("/prihlaseni");
    // vytvoří výstřižek stránky ve 2 růžzných velikostech
    await page.setViewportSize({ width: 800, height: 600 });
    await page.screenshot({ path: "prvni_vystrizek_800_600.png" });

    await page.setViewportSize({ width: 920, height: 1080 });
    await page.screenshot({ path: "druhy_vystrizek_920_1080.png" });

    await page.pause(5000);
});

//2.DOMÁCÍ ÚKOL
test("practising locators", async ({ page }) => {
    //přechod na stránku přihlášení + výpis do konzole
    await page.goto("/prihlaseni");

    const emailField = page.getByLabel('Email')
    console.log("Lokátor pro jméno a příjmení je: " + emailField)

    const passwordField = page.getByLabel('Password')
    console.log("Lokátor pro pole heslo je: " + passwordField)

    const buttonLogin = page.getByRole('button', { name: 'Přihlásit' })
    console.log("Lokátor pro tlačítko Přihlásit je: " + buttonLogin)

    const linkForgetYourPassword = page.getByText('Zapomneli jste sve heslo?')
    console.log("Lokátor pro odkaz na Jste tu poprvé je: " + linkForgetYourPassword)

    const buttonRegister = page.getByRole('link', { name: 'Zaregistrujte se' })
    console.log("Lokátor pro tlačítko Zaregistrujte se je: " + buttonRegister)
});

//3.DOMÁCÍ ÚKOL
test("entering text", async ({ page }) => {
    await page.goto("/prihlaseni")

    //Zde jsou definované elementy s kterými pak budu manipulovat
    const emailField = page.getByLabel('Email')
    const passwordField = page.getByLabel('Heslo')
    const buttonLogin = page.getByRole('button', { name: 'Přihlásit' })
    //Zde jsou akce s elementy výše
    await emailField.fill(username)
    await passwordField.fill(password)
    await buttonLogin.click()
})

