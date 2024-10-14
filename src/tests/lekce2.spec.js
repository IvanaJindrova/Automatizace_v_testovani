import { test } from "@playwright/test";

test("should open login page", async ({ page }) => {
    //přechod na stránku přihlášení + výpis do konzole
    await page.goto("/prihlaseni");
    //console.log("To koukáš co? :D");
    //dle tagu
    
    await page.setViewportSize({ width: 800, height: 600 });
    await page.screenshot({ path: "prvni_vystrizek_800_600.png" });

});