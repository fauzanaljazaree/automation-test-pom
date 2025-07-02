// test/login.js
const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
const page_login = require("../pages/page_login");
const page_inventory = require("../pages/page_inventory");

describe("SauceDemo - End-to-End", function () {
  let driver;

  /* ---------- GLOBAL SETUP / TEARDOWN ---------- */
  beforeEach(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com/");
  });

  afterEach(async () => {
    await driver.quit();
  });

  it("Sukses Login dengan kredensial valid", async function () {
    // mengakses saucedemo.com dan memasukan credential
    await driver.findElement(page_login.inputUsername).sendKeys("standard_user");
    await driver.findElement(page_login.inputPassword).sendKeys("secret_sauce");
    await driver.findElement(page_login.buttonLogin).click();

    // Assertion: harus diarahkan ke halaman inventory
    const currentUrl = await driver.getCurrentUrl();
    assert.ok(currentUrl.includes("/inventory.html"), `Login gagal, URL sekarang: ${currentUrl}`);
  });

  it("mengurutkan produk Z → A", async () => {
    // mengakses saucedemo.com dan memasukan credential
    await driver.findElement(page_login.inputUsername).sendKeys("standard_user");
    await driver.findElement(page_login.inputPassword).sendKeys("secret_sauce");
    await driver.findElement(page_login.buttonLogin).click();

    // Assertion: harus mengurutkan inventory dari Z-A
    const sortSelect = await driver.findElement(page_inventory.sortMenu);
    await sortSelect.findElement(page_inventory.sortMenuza).click();

    const names = await driver.findElements(page_inventory.inventoryItemName).then((els) => Promise.all(els.map((el) => el.getText())));

    assert.deepStrictEqual(names, [...names].sort().reverse(), "Produk tidak terurut Z-A");
  });
});
