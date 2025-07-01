const { By } = require("selenium-webdriver");

class pageInventory {
  static sortMenu = By.xpath('//*[@id="header_container"]/div[2]/div/span/select');
  static sortMenuza = By.css('option[value="za"]');
  static inventoryItemName = By.css(".inventory_item_name");
}

module.exports = pageInventory;
