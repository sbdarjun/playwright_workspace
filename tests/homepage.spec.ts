const { test, expect } = require("@playwright/test");
const { login } = require("./auth.spec");

test("Visit Dashboard Page and Verify Content", async ({ page }) => {
  await login(page, "admin", "Admin123");
  await page.getByLabel("App Menu", { exact: true });
  await page.waitForSelector(
    ".-esm-active-visits__active-visits__desktopHeading___v01T2",
    { visible: true }
  );
  expect(page.url()).toContain("https://o3.openmrs.org/openmrs/spa/home");
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Patient lists' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Service queues' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Appointments' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Active Visits' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Today\'s Appointments' })).toBeVisible();
  console.log("Test is passed");
});
