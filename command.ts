const Login = async (page, username, password) => {
    await page.goto('/');
    await page.getByPlaceholder('Username').isVisible();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').isVisible();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', {name:'Login'}).click(); 
};
const Logout = async (page, dropdown) => {
    await dropdown?.click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    await page.getByRole('heading', { name: 'Login' });
};

module.exports = { Login, Logout };