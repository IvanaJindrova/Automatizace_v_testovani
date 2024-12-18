import { expect, test } from "@playwright/test";

test("should login and list applications", async ({ page }) => {

    // 0. nesprávné přihlášení 
    test.beforeAll(
        await page.goto("/prihlaseni")
    );
    
    

     // 1. jdi na stránku přihlásit
     await page.goto("/prihlaseni");

     // 2. klikni na přihlásit
     const loginButton = page.getByRole("button", { name: "Přihlásit" });
     await loginButton.click();

     // 3. zkontroluj že vyskočila chyba

     // 4. vyplň spárvný email a správné heslo
     const emailField = page.getByLabel("Email");
     const passwordField = page.getByLabel("Heslo");

     await emailField.fill("da-app.admin@czechitas.cz");
     await passwordField.fill("Czechitas123");

     // 5. klikni na přihlásit
     await loginButton.click();

     // 6. zkontroluj že se uživatel přihlásil

     // 7. jdi na stránku přihlášky
     await page.getByRole("link", { name: "Přihlášky" }).click();
     await page.waitForLoadState();

     // 8. vypiš všechny řádky tabulky


});