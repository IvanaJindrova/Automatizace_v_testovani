import { test } from "@playwright/test";

test("should open login page", async ({ page }) => {
    //přechod na stránku přihlášení + výpis do konzole
    await page.goto("/prihlaseni");
    console.log("To koukáš co? :D");
    await page.setViewportSize({ width: 800, height: 600 });
    await page.screenshot({ path: "prvni_vystrizek_800_600.png" });

    await page.setViewportSize({ width: 920, height: 1080 });
    await page.screenshot({ path: "druhy_vystrizek_920_1080.png" });

    await page.pause(5000);
});