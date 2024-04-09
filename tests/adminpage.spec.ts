import { afterEach, beforeEach } from "node:test";

const { test, expect } = require("@playwright/test");
const { login, logout } = require("../command");
beforeEach(() => {
  login();
});
afterEach(() => {
  logout();
});
test("Redirect to the Admin Page", async ({ page }) => {
  try {
    // Click on the "Admin" link
    await expect(page.getByRole("link", { name: "Admin" })).toBeVisible();
    await page.waitForNavigation();

    // Wait for elements on the Admin page
    await page.waitForSelector(".oxd-topbar-header-breadcrumb", {
      visible: true,
    });
    await page.waitForSelector("h1", { text: "System Users" });
    await page.waitForSelector("button", { text: "Add" });
    await page.waitForSelector(".orangehrm-container");

    console.log("Successfully redirected to the Admin page.");
  } catch (error) {
    console.error("Error redirecting to the Admin page:", error);
  }
});
