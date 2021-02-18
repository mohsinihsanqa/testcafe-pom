import { Selector, t } from 'testcafe';

export class Packaging {
  
retailerBtn: Selector = Selector(".v-radio [aria-label='Retailer'][value='retailer']");
distributorBtn: Selector = Selector(".v-radio [aria-label='Distributor'][role='radio']");
supplierBtn: Selector = Selector(".v-radio [aria-label='Supplier'][type='radio']");

email: Selector = Selector("input[aria-label='Email']");
password: Selector = Selector("input[aria-label='Password']");

// Login Button
loginBtn: Selector = Selector('.apply-button')

// Dashboard
signoutBtn: Selector = Selector('.sign-out');
userAvatar: Selector = Selector('.user-block');

// Packaging Selector
clickPkg: Selector = Selector(".v-list__group__items > div[role='listitem']:nth-child(3)")
// Header Text
mainHeader: Selector = Selector('.main-head-text')
// Delete Brand Button
dltBrandBtn: Selector = Selector(".brands-button .apply-button .v-btn__content")
// Add Brand Button
addBrandBtn: Selector = Selector('.v-btn__content')
// Verify text containers
blockText: Selector = Selector('.v-card__title')
// plus Sign
plusSign: Selector = Selector('div#packageOverview > div > div > div > div:nth-of-type(2) > nav > div > button > div > i')

// Adding data to Container
contTypeText: Selector = Selector('div#inspire > div:nth-of-type(7) > div > div > div:nth-of-type(2) > div > div > div > div > div > div > div > div > div > div > input')
contVolume: Selector = Selector('div#inspire > div:nth-of-type(7) > div > div > div:nth-of-type(2) > div > div > div > div > div:nth-of-type(2) > div > div > div > div > div > input')
contVolumeUnit: Selector = Selector('input[aria-label="Volume Unit"][type="text"]')
contVolumeUnitSelect: Selector = Selector('div#inspire > div:nth-of-type(8) > div > div > div:nth-of-type(2) > a > div > div')
contName: Selector = Selector('div#inspire > div:nth-of-type(7) > div > div > div:nth-of-type(2) > div > div > div > div > div:nth-of-type(2) > div:nth-of-type(3) > div > div > div > div > input')
botle: Selector = Selector('div#inspire > div:nth-of-type(9) > div > div > div:nth-of-type(2) > a > div > div')
saveBtn: Selector = Selector('div#inspire > div:nth-of-type(7) > div > div > div:nth-of-type(3) > div > div:nth-of-type(2) > button:nth-of-type(2) > div')
containerSaveMsg: Selector = Selector('*')
createAnother: Selector = Selector('div#inspire > div:nth-of-type(7) > div > div > div:nth-of-type(3) > div > div > div > div > div > div > div')
createContainerText: Selector = Selector('.v-card__title')
// Must be larger than 0
errorMsg: Selector = Selector('.v-messages__message')
disabledSaveBtn: Selector = Selector("button[disabled='disabled']");
// Concel Button
cancelBtn: Selector = Selector('div#inspire > div:nth-of-type(7) > div > div > div:nth-of-type(3) > div > div:nth-of-type(2) > button > div')
// Edit Container
editCont: Selector = Selector('div#packageOverview > div > div > div > div:nth-of-type(2) > div > div > div > a > div > div:nth-of-type(2)')
// Verfiy Edit container Text
editContText: Selector = Selector('.v-card__title')
// Delete Container
dltCont: Selector = Selector('button.package-delete-btn')
// Delete container Msg
dltContMsg: Selector = Selector('*')

/// /////////////////////////////////////////////////////////////////////////////////
/// ///////////////////Retail Packaging Section/////////////////////////////////////
// Create Retail Packaging
addRetailPackaging: Selector = Selector('div#packageOverview > div > div:nth-of-type(2) > div > div:nth-of-type(2) > nav > div > button > div > i')
// Verify Text Create Retail Packaging
verfiyTextCreateR: Selector = Selector('div#inspire > div:nth-of-type(5) > div > div > div')
// Click Container
clickCont: Selector = Selector('input[aria-label="Container"][readonly="readonly"]')
// Select 15.5gal Keg
selectKg: Selector = Selector('div#inspire > div:nth-of-type(6) > div > div > div:nth-of-type(2) > a > div > div')
// Containers per Retail Package
contPerRetail: Selector = Selector('input[aria-label="Containers per Retail Package"]')
// Click Save Button
clickSave: Selector = Selector('div#inspire > div:nth-of-type(5) > div > div > div:nth-of-type(3) > div > div:nth-of-type(2) > button:nth-of-type(2) > div')
// Retail Packaging Save Msg
retailPackSaveMsg: Selector = Selector('*')
// create another
checkCreateAnother: Selector = Selector('div#inspire > div:nth-of-type(5) > div > div > div:nth-of-type(3) > div > div > div > div > div > div > div')
// Edit Retail packaging
editRetailPack: Selector = Selector('div#packageOverview > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > a > div > div')
// Delete Retail Packaging
deleteRetailPackaging: Selector = Selector('div#packageOverview > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > a > button > div > img')

/// ////////////////////////////////////////////////////////////////////////
// Add Create Packaging Type
createPackage: Selector = Selector('div#packageOverview > div > div:nth-of-type(3) > div > div:nth-of-type(2) > nav > div > button > div > i')
// Retail Package
retailPkg: Selector = Selector('input[aria-label="Retail Package"]')
// Select Retail Package
selectRetailPkg: Selector = Selector('div#inspire > div:nth-of-type(4) > div > div > div:nth-of-type(3) > a > div')

// Create Package Type
noOfRetail: Selector = Selector('input[aria-label="Number of Retail Packages"]')
weightt: Selector = Selector('input[aria-label="Weight"][type="number"]')
weightUnit: Selector = Selector('input[aria-label="Weight Unit"]')
selectWeightUnit: Selector = Selector('div#inspire > div:nth-of-type(3) > div > div > div > a > div > div')
pkgLayer: Selector = Selector('input[aria-label="Packages per Layer"]')
mLayer: Selector = Selector('input[aria-label="Maximum Layers"]')
creatPkgType: Selector = Selector('div#inspire > div:nth-of-type(2) > div > div > div:nth-of-type(3) > div > div:nth-of-type(2) > button:nth-of-type(2) > div')
pkgTypeSave: Selector = Selector('*')
createPkgAnother: Selector = Selector('div#inspire > div:nth-of-type(2) > div > div > div:nth-of-type(3) > div > div > div > div > div > div > div')
// Verify Create Packaging type Disabled Button
packDisabledBtn: Selector = Selector('button[disabled="disabled"]')
// Delete Packaging
dltPackagingType: Selector = Selector('#packageOverview div:nth-child(3) div:nth-child(5) .package-delete-btn .delete-icon')
dltPackageMsg: Selector = Selector('*')
// Edit Packaging
editPackaging: Selector = Selector('div#packageOverview > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(4) > div > a > div > div')
// Edit Packaging Type Concel button
editCancel: Selector = Selector('div#inspire > div:nth-of-type(2) > div > div > div:nth-of-type(3) > div > div:nth-of-type(2) > button > div')
// Edit Retail Packaging Concel button
editRetailCancel: Selector = Selector('div#inspire > div:nth-of-type(5) > div > div > div:nth-of-type(3) > div > div:nth-of-type(2) > button > div')
// Click on close icon
clkClose: Selector = Selector('#close__a')

newSupplierName: Selector = Selector("input[aria-label='Your Name']");
newSupplierEmail: Selector = Selector("input[aria-label='Email Address']");
newSpplierpassword: Selector = Selector("input[aria-label='Password']");

signupBtn: Selector = Selector('div#inspire > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div > form > div:nth-of-type(5) > a');
company_supplier: Selector = Selector('#companySearch');
clicksignupBtn: Selector = Selector('form.v-form div.justify-center');

// payment details
address1: Selector = Selector("input[type='text'][aria-label='Address Line 1']");
address2: Selector = Selector("input[type='text'][aria-label='Address Line 2']");
city: Selector = Selector("input[type='text'][aria-label='City']");
state: Selector = Selector("input[type='text'][aria-label='State']");
postalCode: Selector = Selector("input[aria-label='Postal Code'][type='text']");
phone: Selector = Selector("input[type='text'][aria-label='Phone']");
cardNumber: Selector = Selector("input[name='cardnumber']");
expirey: Selector = Selector("input[name='exp-date']");
CVC: Selector = Selector("input[name='cvc']");
zip: Selector = Selector("input[name='postal']")

// Verify Container List Info
contList1: Selector = Selector('div#packageOverview > div > div > div > div:nth-of-type(2) > div > div > div > a > div > div')
contList2: Selector = Selector('div#packageOverview > div > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(2) > a > div > div')
contList3: Selector = Selector('div#packageOverview > div > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(3) > a > div > div')
contList4: Selector = Selector('div#packageOverview > div > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(4) > a > div > div')
contList5: Selector = Selector('div#packageOverview > div > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(5) > a > div > div')
contList6: Selector = Selector('div#packageOverview > div > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(6) > a > div > div')

// Verify Retail Pakaging List Info
retailList1: Selector = Selector('div#packageOverview > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > a > div > div')
retailList2: Selector = Selector('div#packageOverview > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div:nth-of-type(2) > a > div > div')
retailList3: Selector = Selector('div#packageOverview > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div:nth-of-type(3) > a > div > div')
retailList4: Selector = Selector('div#packageOverview > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div:nth-of-type(4) > a > div > div')
retailList5: Selector = Selector('div#packageOverview > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div:nth-of-type(5) > a > div > div')
retailList6: Selector = Selector('div#packageOverview > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div:nth-of-type(666) > a > div > div')

// Verify Package type List Info
pkgTypeList1: Selector = Selector('div#packageOverview > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div > div > div > div > a > div > div')
pkgTypeList2: Selector = Selector('div#packageOverview > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(2) > div > a > div > div')
pkgTypeList3: Selector = Selector('div#packageOverview > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(3) > div > a > div > div')
pkgTypeList4: Selector = Selector('div#packageOverview > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(4) > div > a > div > div')
pkgTypeList5: Selector = Selector('div#packageOverview > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(5) > div > a > div > div')
pkgTypeList6: Selector = Selector('div#packageOverview > div > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div > div > div:nth-of-type(6) > div > a > div > div')

async clickClose () {
  await t
    .switchToIframe("#hubspot-messages-iframe-container iframe[title='chat widget']")
    .expect(this.clkClose.exists).ok({ timeout: 5000 })
    .click(this.clkClose)
    .switchToMainWindow()
}

async loginSupplier (email, password) {
  await t
    .typeText(this.email, email)
    .typeText(this.password, password)
    .click(this.loginBtn)
}

async verifyLogin() {
    await t.expect(this.userAvatar.exists).ok({ timeout: 70000 });
    await t.expect(this.signoutBtn.exists).ok();
  }

async maximizeWindow () {
  await t.maximizeWindow()
}

async clickLoginBtn () {
  await t.expect(this.loginBtn.exists).ok()
  await t.click(this.loginBtn)
}


async clickOnPkg () {
  await t.expect(this.clickPkg.exists).ok({ timeout: 20000 })
  await t.click(this.clickPkg)
  await t.expect(this.mainHeader.withText('Packaging').exists).ok({ timeout: 9000 })
}

async verifyDeleteBrandBtn () {
  await t.expect(this.dltBrandBtn.withText('View Deleted Brands').exists).ok({ timeout: 20000 })
}

async verifyAddBrand () {
  await t.expect(this.addBrandBtn.withText('Add a Brand').exists).ok({ timeout: 20000})
}

async verifyContainerText () {
  await t.expect(this.blockText.withText('Containers').exists).ok({ timeout: 20000 })
}

async verifyRetailPackagingText () {
  await t.expect(this.blockText.withText('Retail Packaging').exists).ok({ timeout: 20000 })
}

async verifyPackageTypesText () {
  await t.expect(this.blockText.withText('Package Types').exists).ok({ timeout: 20000 })
}

async clickOnAddContainer () {
  await t.expect(this.plusSign.exists).ok()
  await t.expect(this.plusSign.withText('add').exists).ok({ timeout: 20000 })
  await t.click(this.plusSign)
}

async createContainer (contVolume) {
  await t
    .click(this.contTypeText)
    .click(this.botle)
    .typeText(this.contVolume, contVolume)
    .click(this.contVolumeUnit)
    .click(this.contVolumeUnitSelect.withText('liter'))
    .expect(this.saveBtn.withText('Save').exists).ok({ timeout: 20000 })
}

async createContainerAndCreateAnother (contVolume) {
}



async typeFieldEmpty (contVolume) {
  await t

}



async volumeFieldEmpty () {
  await t
    .click(this.contTypeText)
    .click(this.botle)
    .click(this.contVolumeUnit)
    .click(this.contVolumeUnitSelect.withText('liter'))
    .expect(this.saveBtn.withText('Save').exists).ok({ timeout: 20000 })
    .click(this.createAnother)
}

async volumeUnitFiledEmpty (contVolume) {
  await t
    .click(this.contTypeText)
    .click(this.botle)
    .typeText(this.contVolume, contVolume)
    .expect(this.saveBtn.withText('Save').exists).ok({ timeout: 20000 })
    .click(this.createAnother)
}

async typeAndVolumeEmpty () {
  await t
    .click(this.contVolumeUnit)
    .click(this.contVolumeUnitSelect.withText('liter'))
    .expect(this.saveBtn.withText('Save').exists).ok({ timeout: 20000 })
    .click(this.createAnother)
}

async volumeAndVolumeUnitEmpty () {
  await t
    .click(this.contTypeText)
    .click(this.botle)
    .expect(this.saveBtn.withText('Save').exists).ok({ timeout: 20000 })
    .click(this.createAnother)
}

async editContainer (contVolume) {
  await t
    .click(this.contTypeText)
    .click(this.botle)
    .selectText(this.contVolume)
    .pressKey('delete')
    .typeText(this.contVolume, contVolume)
    .click(this.contVolumeUnit)
    .click(this.contVolumeUnitSelect.withText('liter'))
    .expect(this.saveBtn.withText('Save').exists).ok({ timeout: 20000 })
}

async clickEditContainer () {
  await t.click(this.editCont)
  await t.expect(this.editContText.withText('Edit Container').exists).ok({ timeout: 20000 })
}

async verifycontainerSaveMsg () {
  await t.expect(this.containerSaveMsg.withText('Container saved').exists).ok({ timeout: 20000 })
}

async verifyCreateContainerForm () {
  await t.expect(this.createContainerText.withText('Create Container').exists).ok({ timeout: 3000 })
}

async errorMsgLargerThan0 () {
  await t.expect(this.errorMsg.withText('Must be larger than 0').exists).ok({ timeout: 3000 })
}

async verifySaveBtnDisabled () {
  await t.expect(this.disabledSaveBtn.exists).ok({ timeout: 20000 })
}

async clickCancel () {
  await t.click(this.cancelBtn)
}

async clickSaveBtn () {
  await t.click(this.saveBtn)
}

async clickDeleteContainer () {
  await t.click(this.dltCont)
}

async deleteContainerMsg () {
  await t.expect(this.dltContMsg.withText('Container deleted').exists).ok({ timeout:20000 })
}
/// /////////////////////////////////////////////////////////////////////////////////////
/// /////////////////// Retail Packaging Section////////////////////////////////////////

async createRetailPackage () {
  await t.click(this.addRetailPackaging)
}

async verifyCreateRetailPackagingText () {
  await t.expect(this.verfiyTextCreateR.withText('Create Retail Packaging').exists).ok({ timeout: 20000 })
}

async createRetailPackaging (contVolume) {
  await t
    .click(this.clickCont)
    .click(this.selectKg)
    .typeText(this.contPerRetail, contVolume)
}

async contFieldEmpty (contVolume) {
  await t
    .typeText(this.contPerRetail, contVolume)
}

async editRePack (contVolume) {
  await t
    .click(this.clickCont)
    .click(this.selectKg)
    .selectText(this.contPerRetail)
    .pressKey('delete')
    .typeText(this.contPerRetail, contVolume)
}

async clickSaveButton () {
  await t
    .expect(this.clickSave.withText('Save').exists).ok({ timeout: 20000 })
    .click(this.clickSave)
}

async retailPackageSaveMsg () {
  await t
    .expect(this.retailPackSaveMsg.withText('Retail package saved').exists).ok({ timeout: 20000 })
}

async clickCreateAnother () {
  await t
    .click(this.checkCreateAnother)
}

async clickEditRetailPackaging () {
  await t
    .click(this.editRetailPack)
}

async clickDeleteRetailPackaging () {
  await t
    .click(this.deleteRetailPackaging)
}
/// /////////////////////////////////////////////////////////////////////////////////////
/// ////////////////////////Package Types///////////////////////////////////////////////

async AddPackagingType () {
  await t
    .click(this.createPackage)
}

async AddingPackaging (noRetailPkgs, weight, pkgPerLayer, maxLayer) {
  await t
    .click(this.retailPkg)
    .click(this.selectRetailPkg)
    .typeText(this.noOfRetail, noRetailPkgs)
    .typeText(this.weightt, weight)
    .click(this.weightUnit)
    .click(this.selectWeightUnit)
    .typeText(this.pkgLayer, pkgPerLayer)
    .typeText(this.mLayer, maxLayer)
}

async AddingPackagingWithRetailPkgEmpty (noRetailPkgs, weight, pkgPerLayer, maxLayer) {
  await t
    .typeText(this.noOfRetail, noRetailPkgs)
    .typeText(this.weightt, weight)
    .click(this.weightUnit)
    .click(this.selectWeightUnit)
    .typeText(this.pkgLayer, pkgPerLayer)
    .typeText(this.mLayer, maxLayer)
}

async AddingPackagingNoRetailFieldEmpty (weight, pkgPerLayer, maxLayer) {
  await t
    .click(this.retailPkg)
    .click(this.selectRetailPkg)
    .typeText(this.weightt, weight)
    .click(this.weightUnit)
    .click(this.selectWeightUnit)
    .typeText(this.pkgLayer, pkgPerLayer)
    .typeText(this.mLayer, maxLayer)
}

async AddingPackagingWeightEmpty (noRetailPkgs, pkgPerLayer, maxLayer) {
  await t
    .click(this.retailPkg)
    .click(this.selectRetailPkg)
    .typeText(this.noOfRetail, noRetailPkgs)
    .click(this.weightUnit)
    .click(this.selectWeightUnit)
    .typeText(this.pkgLayer, pkgPerLayer)
    .typeText(this.mLayer, maxLayer)
}

async AddingPackagingPkgLayerEmpty (noRetailPkgs, weight, maxLayer) {
  await t
    .click(this.retailPkg)
    .click(this.selectRetailPkg)
    .typeText(this.noOfRetail, noRetailPkgs)
    .typeText(this.weightt, weight)
    .click(this.weightUnit)
    .click(this.selectWeightUnit)
    .typeText(this.mLayer, maxLayer)
}

async AddingPackagingMaxLayerFieldEmpty (noRetailPkgs, weight, pkgPerLayer) {
  await t
    .click(this.retailPkg)
    .click(this.selectRetailPkg)
    .typeText(this.noOfRetail, noRetailPkgs)
    .typeText(this.weightt, weight)
    .click(this.weightUnit)
    .click(this.selectWeightUnit)
    .typeText(this.pkgLayer, pkgPerLayer)
}

async AddingPackagingRpAndNoPkgEmpty (weight, pkgPerLayer, maxLayer) {
  await t
    .click(this.weightUnit)
    .click(this.selectWeightUnit)
    .typeText(this.pkgLayer, pkgPerLayer)
    .typeText(this.mLayer, maxLayer)
    //console.log(this.containersAllText)
    .typeText(this.mLayer, maxLayer)
}

async AddingPackagingPkgAndMaxLayerEmpty (noRetailPkgs, weight) {
  await t
    .click(this.retailPkg)
    .click(this.selectRetailPkg)
    .typeText(this.noOfRetail, noRetailPkgs)
    .typeText(this.weightt, weight)
    .click(this.weightUnit)
    .click(this.selectWeightUnit)
}

async AddingPackRtlWeightMaxLyrEmpty (noRetailPkgs, pkgPerLayer) {
  await t
    .click(this.retailPkg)
    .click(this.selectRetailPkg)
    .typeText(this.noOfRetail, noRetailPkgs)
    .click(this.weightUnit)
    .click(this.selectWeightUnit)
    .typeText(this.pkgLayer, pkgPerLayer)
}

async editPackagingType (noRetailPkgs, weight, pkgPerLayer, maxLayer) {
  await t
    .click(this.retailPkg)
    .click(this.selectRetailPkg)
    .selectText(this.noOfRetail)
    .pressKey('delete')
    .typeText(this.noOfRetail, noRetailPkgs)
    .selectText(this.weightt)
    .pressKey('delete')
    .typeText(this.weightt, weight)
    .click(this.weightUnit)
    .click(this.selectWeightUnit)
    .selectText(this.pkgLayer)
    .pressKey('delete')
    .typeText(this.pkgLayer, pkgPerLayer)
    .selectText(this.mLayer)
    .pressKey('delete')
    .typeText(this.mLayer, maxLayer)
}

async editPackagingClickCancel (noRetailPkgs, weight, pkgPerLayer, maxLayer) {
  await t
    .click(this.retailPkg)
    .click(this.selectRetailPkg)
    .selectText(this.noOfRetail)
    .pressKey('delete')
    .typeText(this.noOfRetail, noRetailPkgs)
    .selectText(this.weightt)
    .pressKey('delete')
    .typeText(this.weightt, weight)
    .click(this.weightUnit)
    .click(this.selectWeightUnit)
    .selectText(this.pkgLayer)
    .pressKey('delete')
    .typeText(this.pkgLayer, pkgPerLayer)
    .selectText(this.mLayer)
    .pressKey('delete')
    .typeText(this.mLayer, maxLayer)
}

async editOnlyTwoClickCancel (noRetailPkgs) {
  await t
    .click(this.retailPkg)
    .click(this.selectRetailPkg)
    .selectText(this.noOfRetail)
    .pressKey('delete')
    .typeText(this.noOfRetail, noRetailPkgs)
}

async clickSavePkgTypeBtn () {
  await t.click(this.creatPkgType)
}

async pkgTypeSaveMsg () {
  await t.expect(this.pkgTypeSave.withText('Package type saved').exists).ok({ timeout: 20000 })
}

async createAnotherPackage () {
  await t.click(this.createPkgAnother)
}

  async VerifypackDisabledBtn() {
  await t.expect(this.packDisabledBtn.exists).ok({ timeout: 20000 })        

}

async deletePackageType () {
  await t.click(this.dltPackagingType)
}

async deletePackageTypeMsg () {
  await t.expect(this.dltPackageMsg.withText('Package type deleted').exists).ok({ timeout: 9000 })
}

async clickEditPackaging () {
  await t.click(this.editPackaging)
}

async clickEditPackagingCancelBtn () {
  await t.click(this.editCancel)
}

async clickEditRetailCancelBtn () {
  await t.click(this.editRetailCancel)
}

async clickSignUpBtn () {
  await t.expect(this.clicksignupBtn.exists).ok({ timeout: 70000 })
  await t.click(this.clicksignupBtn)
    .wait(10000)
}

async clickSignup () {
  await t.click(this.signupBtn)
}

async selectUserType (user) {
  switch (user) {
    case 'retailer':
      await t.click(this.retailerBtn)
      break
    case 'distributor':
      await t.click(this.distributorBtn)
      break
    case 'supplier':
      await t.click(this.supplierBtn)
      break
  }
}

async fillUserInfo (name, email, password, company) {
  await t
    .typeText(this.company_supplier, company)
    .typeText(this.newSupplierName, name)
    .typeText(this.newSupplierEmail, email)
    .typeText(this.newSpplierpassword, password)
}

async fillPaymentDetails (address1, address2, city, state, postalCode, phone, cardNumber, expirey, CVC, zip = '') {
  await t
    .typeText(this.address1, address1)
    .typeText(this.address2, address2)
    .typeText(this.city, city)
    .typeText(this.state, state)
    .typeText(this.postalCode, postalCode)
    .typeText(this.phone, phone)
    .switchToIframe('#card-element iframe') // switching to iframe
    .typeText(this.cardNumber, cardNumber)
    .typeText(this.expirey, expirey)
    .typeText(this.CVC, CVC)
    .typeText(this.zip, zip)
    .switchToMainWindow()
}

async verifyContianerListItem() {
     
   await t.expect(this.contList1.exists).ok({ timeout: 9000 })
   await t.expect(this.contList2.exists).ok({ timeout: 9000 })
   await t.expect(this.contList3.exists).ok({ timeout: 9000 })
   await t.expect(this.contList4.exists).ok({ timeout: 9000 })
   await t.expect(this.contList5.exists).ok({ timeout: 9000 })
   await t.expect(this.contList6.exists).ok({ timeout: 9000 })
  
}
// async verifyRetailListItem()
// {
//    await t.expect(this.retailList1.exists).ok({ timeout: 9000 })
//    await t.expect(this.retailList2.exists).ok({ timeout: 9000 })
//    await t.expect(this.retailList3.exists).ok({ timeout: 9000 })
//    await t.expect(this.retailList4.exists).ok({ timeout: 9000 })
//    await t.expect(this.retailList5.exists).ok({ timeout: 9000 })
//    await t.expect(this.retailList6.exists).ok({ timeout: 9000 })
// }

// async verifyContianerListItem () {
//   await t.expect(this.contList1.exists).ok({ timeout: 9000 })
//   await t.expect(this.contList2.exists).ok({ timeout: 9000 })
// }

// async verifyRetailListItem () {
//   await t.expect(this.retailList1.exists).ok({ timeout: 9000 })
//   await t.expect(this.retailList2.exists).ok({ timeout: 9000 })

// }

async verifyRetailListItem()
{
   await t.expect(this.retailList1.exists).ok({ timeout: 9000 })
   await t.expect(this.retailList2.exists).ok({ timeout: 9000 })
   await t.expect(this.retailList3.exists).ok({ timeout: 9000 })
   await t.expect(this.retailList4.exists).ok({ timeout: 9000 })
   await t.expect(this.retailList5.exists).ok({ timeout: 9000 })
   await t.expect(this.retailList6.exists).ok({ timeout: 9000 })


}


async verifyPakacgeTypeListItem () {
  await t.expect(this.pkgTypeList1.exists).ok({ timeout: 9000 })
  await t.expect(this.pkgTypeList2.exists).ok({ timeout: 9000 })
  await t.expect(this.pkgTypeList3.exists).ok({ timeout: 9000 })
  await t.expect(this.pkgTypeList4.exists).ok({ timeout: 9000 })
  await t.expect(this.pkgTypeList5.exists).ok({ timeout: 9000 })
  await t.expect(this.pkgTypeList6.exists).ok({ timeout: 9000 })


}
}
