import { Role, Selector } from 'testcafe';
import { Retailer } from './page-models/retailer-order';
const retailer = new Retailer();
const url = 'https://test.brewoptix.com/retailer/purchase-orders'

    const userTour = Role('https://test.brewoptix.com/', async t => {
    const companyName = Selector("#companySearch[placeholder='Enter a location']");
    const name = Selector("[required='required'][aria-label='Your Name']");
    const email = Selector("input[aria-label='Email Address']");
    const randomEmail = `automation+${Math.floor(Math.random() * 10000)}@brewoptix.com`; // generates random email 
    const password = Selector("input[aria-label='Password']");
    const sigunUp = Selector(".primary[type='button'] .v-btn__content");
    const userAvatar = Selector(".user-block")
 
    await t.maximizeWindow()
    await t.click('.sign-up-link')
    await t.expect(companyName.exists).ok({ timeout: 70000 });
    await t.typeText(companyName, 'taimur aamer');
    await t.typeText(name, 'My-name');
    await t.typeText(email, randomEmail);
    await t.typeText(password, 'Admin@123');
    await t.click(sigunUp);
    await t.expect(userAvatar.exists).ok({ timeout: 20000 });
    await retailer.getStarted();
    await retailer.inviteNewUser();
    await retailer.userEmails();
    await retailer.addAccounts();
    await retailer.accessAccountsPage();
    await retailer.manageAccounts();
    await retailer.addNewAccounts();
    await retailer.accessBrandsPage();
    await retailer.brandsScreen();
    await retailer.brandFilters();
    await retailer.brandDetailsView();
    await retailer.accessPurchaseOrders();
    await retailer.newPurchaseOrders();
}, { preserveUrl: true });
        
fixture `Retailer signup tour and order`
 .disablePageReloads
 
test(`verify the tour popup`, async t => {
    await t.setTestSpeed(0.3);
    await t.useRole(userTour)
});


test('Add distributor ', async (t) => {
    await t.navigateTo(url)
    await retailer.addDistributor();
    await retailer.verifyNewDistributor();
    });


// test(`test3`, async t => {
//     await t.navigateTo('https://www.instagram.com/neymarjr/');
//     await t.wait(5000);
// });