// test/login.js
const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
const page_login = require("../pages/page_login");

describe("Login - SauceDemo", function () {
  let driver;

  it("Sukses Login dengan kredensial valid", async function () {
    driver = await new Builder().forBrowser("chrome").build();

    // mengakses saucedemo.com dan memasukan credential
    await driver.get("https://www.saucedemo.com/");

    await driver.findElement(page_login.inputUsername).sendKeys("standard_user");
    await driver.findElement(page_login.inputPassword).sendKeys("secret_sauce");
    await driver.findElement(page_login.buttonLogin).click();

    // Assertion: harus diarahkan ke halaman inventory
    const currentUrl = await driver.getCurrentUrl();
    assert.ok(currentUrl.includes("/inventory.html"), `Login gagal, URL sekarang: ${currentUrl}`);

    // menutup web browser
    await driver.quit();
  });
});
