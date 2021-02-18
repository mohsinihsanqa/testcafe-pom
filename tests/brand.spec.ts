import 'testcafe';
import { Selector, t } from 'testcafe';
import { Brand } from './page-models/brand';
import { Packaging } from './page-models/package';


import {  } from './page-models/brand';

const url = 'https://test.brewoptix.com/session/login';
const dataSet = require('./data.json');
const brand = new Brand();
const pack = new Packaging();

fixture('brand').page(url)
.beforeEach(async t => {

    t.fixtureCtx.randomEmail = `test+${Math.floor(Math.random() * 100000)}@gmail.com`; // generates random email 
    t.fixtureCtx.randomName = `testBrand+${Math.floor(Math.random() * 100000)}`;
}) 

dataSet.forEach(data => {

test('log in as a supplier and Verifies Brand Text, View Deleted Brands and Add a Brand Button', async (t) => {
   
    await pack.maximizeWindow();
    await pack.loginSupplier(data.email, data.password);
    await pack.clickLoginBtn();
    // await pack.clickClose()
    await brand.verifyBrandText();
    await brand.verifyViewDltBrandBtn();
    await brand.verifyAddABrand();
    await brand.clickAddABrand()

    

});
test('log in as a supplier and Verify Add A Brand Button clickable', async (t) => {
   
    await pack.maximizeWindow();
    await pack.loginSupplier(data.email, data.password);
    await pack.clickLoginBtn();
    // await pack.clickClose()
    await brand.verifyBrandText();
    await brand.verifyViewDltBrandBtn();
    await brand.verifyAddABrand();
    await brand.clickAddABrand();
    await brand.verifyLogoText();
    await brand.verifyPackagingText();   

});

test('log in as a supplier and Verify View Deleted Brands clickable', async (t) => {
   
    await pack.maximizeWindow();
    await pack.loginSupplier(data.email, data.password);
    await pack.clickLoginBtn();
    // await pack.clickClose()
    await brand.verifyBrandText();
    await brand.verifyViewDltBrandBtn();
    await brand.verifyAddABrand();
    await brand.clickViewDeletedBrand();
    await brand.verifyDeletedBrandsText();    

});

test('log in as a supplier and Add A New Brand ', async (t) => {
   
    await pack.maximizeWindow();
    await pack.loginSupplier(data.email, data.password);
    await pack.clickLoginBtn();
    // await pack.clickClose()
    await brand.verifyBrandText();
    await brand.verifyViewDltBrandBtn();
    await brand.verifyAddABrand();
    await brand.clickAddABrand();
    await brand.verifyLogoText();
    await brand.verifyPackagingText();  
    await brand.fillBrandInfo(t.fixtureCtx.randomName, '10', 'wheat', 'Brand Description') 
    await brand.clickDoneBtn();

});
test('Add A New Brand with adding packaging', async (t) => {
   
    await pack.maximizeWindow();
    await pack.loginSupplier(data.email, data.password);
    await pack.clickLoginBtn();
    // await pack.clickClose()
    await brand.verifyBrandText();
    await brand.verifyViewDltBrandBtn();
    await brand.verifyAddABrand();
    await brand.clickAddABrand();
    await brand.verifyLogoText();
    await brand.verifyPackagingText();  
    await brand.fillBrandInfo(t.fixtureCtx.randomName, '20', 'wheat', 'Brand Description') 
    await brand.brandPackagingInfo("Ad beat","Sunt animi"," tempor qu","14","Voluptate","68")
    await brand.verifyProductExists();
    await brand.clickDoneBtn();
    

});

test('Add A New Brand with state registrations  ', async (t) => {

    await pack.maximizeWindow();
    await pack.loginSupplier(data.email, data.password);
    await pack.clickLoginBtn();
    // await pack.clickClose()
    await brand.verifyBrandText();
    await brand.verifyViewDltBrandBtn();
    await brand.verifyAddABrand();
    await brand.clickAddABrand();
    await brand.verifyLogoText();
    await brand.verifyPackagingText();  
    await brand.fillBrandInfo(t.fixtureCtx.randomName, '67', 'wheat', 'Brand Description') 
    await brand.addRtateRegistration('56273')
    await brand.verifyBrandDeactivatedMsg();
    await brand.verifyStateRegEntry();
    await brand.clickDoneBtn();
    

});
test('Add A New Brand with Adding packaging state registrations  ', async (t) => {
   
    await pack.maximizeWindow();
    await pack.loginSupplier(data.email, data.password);
    await pack.clickLoginBtn();
    // await pack.clickClose()
    await brand.verifyBrandText();
    await brand.verifyViewDltBrandBtn();
    await brand.verifyAddABrand();
    await brand.clickAddABrand();
    await brand.verifyLogoText();
    await brand.verifyPackagingText();  
    await brand.fillBrandInfo(t.fixtureCtx.randomName, '67', 'wheat', 'Brand Description') 
    await brand.brandPackagingInfo("Ad beat","Sunt animi"," tempor qu","14","Voluptate","68")
    await brand.verifyProductExists();
    await brand.addRtateRegistration('573')
    await brand.verifyBrandDeactivatedMsg();
    await brand.verifyStateRegEntry()
    await brand.clickDoneBtn();
    

});

test('Add A New Brand and "Check" Create Another ', async (t) => {
   
    await pack.maximizeWindow();
    await pack.loginSupplier(data.email, data.password);
    await pack.clickLoginBtn();
    // await pack.clickClose()
    await brand.verifyBrandText();
    await brand.verifyViewDltBrandBtn();
    await brand.verifyAddABrand();
    await brand.clickAddABrand();
    await brand.verifyLogoText();
    await brand.verifyPackagingText();  
    await brand.fillBrandInfo(t.fixtureCtx.randomName, '20', 'wheat', 'Brand Description') 
    await brand.checkedCreateAnother();
    await brand.clickDoneBtn();
    await brand.verifyLogoText();
    await brand.verifyPackagingText();

});


test('Should NOT be able to create  With Existance Brand Name (A brand with the same name already exists)', async (t) => {
   
    await pack.maximizeWindow();
    await pack.loginSupplier(data.email, data.password);
    await pack.clickLoginBtn();
    // await pack.clickClose()
    await brand.verifyBrandText();
    await brand.verifyViewDltBrandBtn();
    await brand.verifyAddABrand();
    await brand.clickAddABrand();
    await brand.verifyLogoText();
    await brand.verifyPackagingText();  
    await brand.BrandWithNameExists("Taimur Aamer","5") 
    await brand.verifyErrorMsgBrandNameExists()

});

test('Verify Error Message Must be a positive number', async (t) => {
   
    await pack.maximizeWindow();
    await pack.loginSupplier(data.email, data.password);
    await pack.clickLoginBtn();
    // await pack.clickClose()
    await brand.verifyBrandText();
    await brand.verifyViewDltBrandBtn();
    await brand.verifyAddABrand();
    await brand.clickAddABrand();
    await brand.verifyLogoText();
    await brand.verifyPackagingText();  
    await brand.fillBrandInfoError(t.fixtureCtx.randomName,"-3")
    await brand.mustPosNo();
   

});
test('should NOT be able to create Brand without filling the form ', async (t) => {
   
    await pack.maximizeWindow();
    await pack.loginSupplier(data.email, data.password);
    await pack.clickLoginBtn();
    // await pack.clickClose()
    await brand.verifyBrandText();
    await brand.verifyViewDltBrandBtn();
    await brand.verifyAddABrand();
    await brand.clickAddABrand();
    await brand.verifyLogoText();
    await brand.verifyPackagingText();  
    await brand.clickDoneButton();

});
test('should be able to create Brand with type Brand Name Only', async (t) => {
   
    await pack.maximizeWindow();
    await pack.loginSupplier(data.email, data.password);
    await pack.clickLoginBtn();
    // await pack.clickClose()
    await brand.verifyBrandText();
    await brand.verifyViewDltBrandBtn();
    await brand.verifyAddABrand();
    await brand.clickAddABrand();
    await brand.verifyLogoText();
    await brand.verifyPackagingText();  
    await brand.fillBrandInfoWithBrandName(t.fixtureCtx.randomName) 
    await brand.clickDoneButton();

});

test('Should NOT be able to create Brand with BRAND NAME Empty', async (t) => {
   
    await pack.maximizeWindow();
    await pack.loginSupplier(data.email, data.password);
    await pack.clickLoginBtn();
    // await pack.clickClose()
    await brand.clickAddABrand();
    await brand.fillBrandInfoWithOutBrandName('10', 'wheat', 'Brand Description')
    await brand.clickDoneBtn();


});
test('Log in as supplier and Edit brand', async (t) => {
   
    await pack.maximizeWindow();
    await pack.loginSupplier(data.email, data.password);
    await pack.clickLoginBtn();
    // await pack.clickClose()
    await brand.clickEditBrand()
    await brand.editBrandInfo(t.fixtureCtx.randomName,'10', 'wheat', 'Brand Description')
    await brand.clickDoneBtn();


});

test('should filter brands by active status', async (t) => {
   
    await pack.maximizeWindow();
    await pack.loginSupplier(data.email, data.password);
    await pack.clickLoginBtn();
    // await pack.clickClose()
    await brand.statusFilterActive();
    await brand.verifyStatusFilterActive();


});

test('should filter brands by inactive status', async (t) => {
   
    await pack.maximizeWindow();
    await pack.loginSupplier(data.email, data.password);
    await pack.clickLoginBtn();
    // await pack.clickClose()
    await brand.statusFilterInactive();
    await brand.verifyStatusFilterInactive();


});

test('should filter brands by type "core"', async (t) => {
   
    await pack.maximizeWindow();
    await pack.loginSupplier(data.email, data.password);
    await pack.clickLoginBtn();
    // await pack.clickClose()
    await brand.filterTypeCoreActive();
    await brand.verifyFilterTypeCore();


});

test('should filter brands by type "Seasonal"', async (t) => {
   
    await pack.maximizeWindow();
    await pack.loginSupplier(data.email, data.password);
    await pack.clickLoginBtn();
    // await pack.clickClose()
    await brand.filterTypeSeasonalActive();
    await brand.verifyFilterTypeSeasonal();

});

test('filter by beer style"', async (t) => {
   
    await pack.maximizeWindow();
    await pack.loginSupplier(data.email, data.password);
    await pack.clickLoginBtn();
    // await pack.clickClose()
    await brand.filterByBeerStyle();
    await brand.verifyFilterByBeerStyle();

});

test('filter by Brand"', async (t) => {
   
    await pack.maximizeWindow();
    await pack.loginSupplier(data.email, data.password);
    await pack.clickLoginBtn();
    // await pack.clickClose()
    await brand.filterByBrand();
    await brand.verifyFilterByBrand();

});

test("Verify Full Screen View", async (t) => {
   
    await pack.maximizeWindow();
    await pack.loginSupplier(data.email, data.password);
    await pack.clickLoginBtn();
    // await pack.clickClose()
    await brand.clickFullScreen();
    await brand.minimaxFullScreen()
    

});
test("Hide NavBar", async (t) => {
   
    await pack.maximizeWindow();
    await pack.loginSupplier(data.email, data.password);
    // await pack.clickLoginBtn();
    await brand.clickFullScreen();
    await brand.hideNavBar()
    

});

test('Log in as supplier and delete brand ', async (t) => {
   
    await pack.maximizeWindow();
    await pack.loginSupplier(data.email, data.password);
    // await pack.clickLoginBtn();
    await brand.clickEditBrand();
    await brand.clickDltBtn();

    

});
test('Log in as supplier and View deleted brand ', async (t) => {
   
    await pack.maximizeWindow();
    await pack.loginSupplier(data.email, data.password);
    await pack.clickLoginBtn();
    // await pack.clickClose()
    await brand.verifyViewDltBrandBtn();
    await brand.clickViewDeletedBrand();    
    

});
test('Log in as supplier and Restore deleted brand from Core', async (t) => {
   
    await pack.maximizeWindow();
    await pack.loginSupplier(data.email, data.password);
    // await pack.clickLoginBtn();
    await brand.verifyViewDltBrandBtn();
    await brand.clickViewDeletedBrand();
    await brand.clickBrandRestoreFromCore();
    await brand.verifyBrandRestoredMsg();    
    

});
test('Log in as supplier and Restore deleted brand from Seasonals', async (t) => {
   
    await pack.maximizeWindow();
    await pack.loginSupplier(data.email, data.password);
    // await pack.clickLoginBtn();
    await brand.verifyViewDltBrandBtn();
    await brand.clickViewDeletedBrand();
    await brand.clickBrandRestoreFromSeasonals();
    await brand.verifyBrandRestoredMsg();    
    

});
})