import { afterEach, beforeEach } from "node:test";

const { test, expect } = require("@playwright/test");
const { login, logout } = require("../command");
beforeEach(() => {
  login();
});
afterEach(() => {
  logout();
});

test("Visit Dashboard Page and Verify Content", async ({ page }) => {
  await page.getByRole("heading", { name: "Dashboard" });
  await page.getByText('Time at Work');
  await page.getByText('My Actions');
  await page.getByText('Quick Launch');
  await page.getByText('Buzz Latest Posts');
  await page.getByText('Employees on Leave Today');
  await page.getByText('Employee Distribution by Sub Unit');
  await page.getByText('Employee Distribution by Location');
  await page.getByLabel('Sidepanel').locator('div');
});
