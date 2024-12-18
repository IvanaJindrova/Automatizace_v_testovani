import { expect, test } from "@playwright/test";

test("should login and list applications", async ({ page }) => {

     // Chci se přihlásit
     await page.goto("/prihlaseni");

     // Proměnné k jednotlivým objektům
     const emailField = page.getByLabel("Email");
     const passwordField = page.getByLabel("Heslo");
     const loginButton = page.getByRole("button", { name: "Přihlásit" });
 
     // Ověří, že jsou pole viditelná
     await expect(emailField).toBeVisible();
     await expect(passwordField).toBeVisible();
 
     // Ověří tlačítko že je viditelné se správným textem
     await expect(loginButton).toBeVisible();
     await expect(loginButton).toHaveText("Přihlásit");

     // Zkusím negaci
     await expect(loginButton).not.toHaveText("Přihlásit");

});

//cvičení 2 
test("tabulka s cisly", async ({ page }) => {

// Přechod na stránku pro přihlášení
await page.goto("/prihlaseni");



// Přihlášení do aplikace
await emailField.fill(username);
await passwordField.fill(password);
await loginButton.click();


// Přechod na stránku s přihláškami
await page.getByRole("link", { name: "Přihlášky" }).click();
await page.waitForLoadState();

// Ověření, že tabulka obsahuje správný počet přihlášek
const expectedApplicationsCount = 5;  // Definuj očekávaný počet přihlášek
const rows = await page.locator(".dataTable tbody tr").all();
expect(rows.length).toBe(expectedApplicationsCount);

// Ověření, že každá přihláška obsahuje správná data (jméno, kategorii kurzu, datum a cenu)
for (const row of rows) {
    const columns = row.locator("td");
    
    // Ověření jména účastníka (1. sloupec)
    const participantName = await columns.nth(0).textContent();
    expect(participantName).not.toBeNull();
    console.log("Participant name: " + participantName);
    
    // Ověření kategorie kurzu (2. sloupec)
    const courseCategory = await columns.nth(1).textContent();
    expect(courseCategory).not.toBeNull();
    console.log("Course category: " + courseCategory);
    
    // Ověření data konání (3. sloupec)
    const courseDate = await columns.nth(2).textContent();
    expect(courseDate).not.toBeNull();
    console.log("Course date: " + courseDate);
    
    // Ověření ceny (4. sloupec)
    const coursePrice = await columns.nth(3).textContent();
    expect(coursePrice).not.toBeNull();
    console.log("Course price: " + coursePrice);
}

});

//const radky = page.locator('#DataTables_Table_0 > tbody > tr');
//await expect(radky).toHaveCount(10);