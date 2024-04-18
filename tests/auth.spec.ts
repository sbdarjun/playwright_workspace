async function login(page, username, password) {
  await page.goto("/");
  await page.getByLabel("Username").click();
  await page.getByLabel("Username").fill("admin");
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("Admin123");
  await page.getByRole("button", { name: "Log in" }).click();
//   await expect(page.getByText('Site 2', { exact: true })).toBeVisible();
  await page.getByText('Site 2', { exact: true }).click();
  await page.getByRole("button", { name: "Confirm" }).click();
}
module.exports = { login };
