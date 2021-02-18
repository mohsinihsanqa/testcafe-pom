import { Selector, t } from 'testcafe';
export class Brand {

brandText: Selector = Selector('.brands-header')
//Brand Button
brandBtn: Selector = Selector('.brands-button')
//Add A Brand
clickAddbrandBtn: Selector = Selector('.orange-button')
//View Deleted brand Button
clickViewDltBranBtn: Selector = Selector('.apply-button')
//Logo Text
logoText: Selector = Selector('.v-card__title')
//Packaging Text
packagingText: Selector = Selector('.v-card__title')
//Deleted Brands
deletedBrandsText: Selector = Selector('.main-head-text')

//Brand Info

brandName: Selector = Selector("div#brandEditor > div:nth-of-type(2) > div > div > div > div:nth-of-type(5) > div > div > div > div > div > input")
coreOrSeasonal: Selector = Selector("input[aria-label='Core or Seasonal']")
selectSeasonal: Selector = Selector('div#inspire > div:nth-of-type(5) > div > div > div:nth-of-type(2) > a > div > div')
abv: Selector = Selector('div#brandEditor > div:nth-of-type(2) > div > div > div > div:nth-of-type(6) > div:nth-of-type(2) > div > div > div > div > input')
AvailableDate: Selector = Selector('div#brandEditor > div:nth-of-type(2) > div > div > div > div:nth-of-type(6) > div:nth-of-type(3) > div > div > div > div > input')
selectAvailableDate: Selector = Selector('div#inspire > div > div > div:nth-of-type(2) > div > div:nth-of-type(2) > table > tbody > tr:nth-of-type(3) > td:nth-of-type(4) > button > div')
beerStyle: Selector = Selector('.vue-treeselect__multi-value')
selectBeerStyle: Selector = Selector('')
clickDesc: Selector = Selector('.v-expansion-panel__header__icon')
description: Selector = Selector('textarea[placeholder="Description . . ."]')
//Done Button
doneBtn: Selector = Selector('.v-btn__content')//
clkDoneBtn: Selector = Selector('.brand-action .apply-button .v-btn__content')
doneWithoutFillingForm: Selector = Selector('div#brandEditor > div:nth-of-type(3) > button > div')
//Bad request. Missing required key-val pair name
badRequest: Selector = Selector('div#inspire > div:nth-of-type(12) > div:nth-of-type(2) > span > div > div > div')
//CheckBox Create Another
clkCreateAnother: Selector = Selector("div#brandEditor > div:nth-of-type(3) > div > div > div > div > div")
//A brand with the same name already exists
errorMsgBrandNameExist: Selector = Selector('div#inspire > div:nth-of-type(12) > div:nth-of-type(2) > span > div > div > div')
//Must be a positive number
positiveNo: Selector = Selector('.v-messages__message')
//Brand Deactivite Message
deactivitMsg: Selector = Selector('div#inspire > div:nth-of-type(14) > div:nth-of-type(2) > span > div > div > div')
statusActive: Selector = Selector('.v-card .tab-switcher:nth-child(2) .tab:nth-child(2)')  
filterStatusActive: Selector = Selector('.v-card .v-retailer-brand-details .tab.active:nth-child(1)')
filteredStatusActive: Selector = Selector ('table tbody tr:nth-child(1) td:nth-child(2)')
statusinactive: Selector = Selector('.v-card .tab-switcher:nth-child(2) .tab:nth-child(3)')  
filterStatusinactive: Selector = Selector('.v-card .v-retailer-brand-details .tab.active:nth-child(3)')
filteredStatusinactive: Selector = Selector ('table tbody tr:nth-child(1) td:nth-child(2)')
filterBycore: Selector = Selector ('.tab-switcher:nth-child(4) .tab:nth-child(2)')
filterByCoreActive: Selector = Selector ('.tab-switcher:nth-child(4) .tab.active')
filteredByCore: Selector = Selector ('table tbody tr:nth-child(1) td:nth-child(5)')
filterBySeasonal: Selector = Selector ('.tab-switcher:nth-child(4) .tab:nth-child(3)')
filterBySeasonalActive: Selector = Selector ('.tab-switcher:nth-child(4) .tab.active')
filteredBySeasonal: Selector = Selector ('table tbody tr:nth-child(1) td:nth-child(5)')
beerFilterTree: Selector = Selector('.vue-treeselect .vue-treeselect__multi-value')
selectBeerType: Selector = Selector ('.vue-treeselect__multi-value-item-container .vue-treeselect__multi-value-item')
brandFilterTree: Selector = Selector(".v-select .v-select__slot [role='combobox'][aria-label='Brand']")
selectBrand: Selector = Selector(".v-list [role='listitem']:nth-child(2) .v-list__tile__title")
switchViewButton: Selector = Selector (".v-toolbar .v-toolbar__content .hover-icon")
//Click full screen
clkFullScreen: Selector = Selector('.v-btn--icon.full-screen i.material-icons.v-icon')
//Hide Navbar
navBar: Selector = Selector('div#inspire > div:nth-of-type(20) > div > div > nav > div > div > div > img')
//delete button
dltBtn: Selector = Selector('div#brandEditor > div:nth-of-type(3) > button > div')
confirmDltBtn: Selector = Selector('div#inspire > div:nth-of-type(8) > div > div > div:nth-of-type(3) > button:nth-of-type(2) > div')
//Edit brand
editBrand: Selector = Selector('.clickable:nth-child(3)')

//add packaging Info

contUPC: Selector = Selector('div#inspire > div:nth-of-type(4) > div > div > div:nth-of-type(2) > div > div > div > div > div:nth-of-type(2) > div > div > div > div > div > input')                                    
restoreBrand: Selector = Selector(".layout:nth-child(2) div:nth-child(1) [role='listitem']:nth-child(1) .v-list__tile button i")
brandRestoreSeasonals: Selector = Selector(".layout:nth-child(2) div:nth-child(2) [role='listitem']:nth-child(1) .v-list__tile button i")
brandRestoreText: Selector = Selector('*')
cnfm: Selector = Selector('div#inspire > div:nth-of-type(7) > div > div > div:nth-of-type(3) > button:nth-of-type(2) > div')
stateReg: Selector = Selector('div#brandEditor > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div:nth-of-type(4) > div > nav > div > button > div > i')
//Add State Registration info
clickAddStateReg: Selector = Selector('div#brandEditor > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div:nth-of-type(4) > div > nav > div > button > div > i')
addState: Selector = Selector("input[aria-label='State']")
selectState: Selector = Selector('div#inspire > div:nth-of-type(4) > div > div > div:nth-of-type(3) > a > div > div')
regNo: Selector = Selector("input[aria-label='Registration #']")
verifyStateRegtrationEntry: Selector = Selector('div#brandEditor > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div:nth-of-type(4) > div > div > div > a > div > div')
brandDeactivteMsg: Selector = Selector('div#inspire > div:nth-of-type(13) > div:nth-of-type(2) > span > div > div > div')
stateRegSaveBtn: Selector = Selector('div#inspire > div:nth-of-type(3) > div > div > div:nth-of-type(3) > button:nth-of-type(2) > div')
clkAddBrandPkg: Selector = Selector('div#brandEditor > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > nav > div > button > div > i')
verifyAddPkgText: Selector = Selector('.v-card__title')

clkPkgType: Selector = Selector("input[aria-label='Package Type']")
selectPkgType: Selector = Selector("[role='listitem'] a .v-list__tile__content .v-list__tile__title")
containerUPC: Selector = Selector("input[aria-label='Container UPC'][type='text']")
retailPkgUPC: Selector = Selector("input[aria-label='Retail Package UPC']")
pkgTypeUPC: Selector = Selector("input[aria-label='Package Type UPC']")
shilfLife: Selector = Selector("input[aria-label='Shelf Life (Days)']")
minPerOrder: Selector = Selector("input[aria-label='Minimum per Order']")
vipNO: Selector = Selector("input[aria-label='VIP Number']")
pkgSaveBtn: Selector = Selector(".d-flex > button:nth-child(2)")
productSaveMsg: Selector = Selector('div#inspire > div:nth-of-type(12) > div:nth-of-type(2) > span > div > div > div')
porductExists: Selector = Selector('div#brandEditor > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div > div > div > div > a > div > div')
//Pre Order

preOrder: Selector = Selector('div#brandEditor > div:nth-of-type(2) > div > div > div > div:nth-of-type(9) > div > div > div > div > div > div')
    

async verifyBrandText() {
     
    await t.expect(this.brandText.withText('Brands').exists).ok({ timeout: 20000 })
    
  }
async verifyViewDltBrandBtn() {
    
await t.expect(this.brandBtn.withText('View Deleted Brands').exists).ok({ timeout: 9000 })

}
async verifyAddABrand() {
     
    await t.expect(this.brandBtn.withText('Add a Brand').exists).ok({ timeout: 9000 })
    
  }
async clickAddABrand() {
    
await t.expect(this.brandBtn.withText('Add a Brand').exists).ok({ timeout: 9000 })
        .click(this.clickAddbrandBtn)

}
async clickViewDeletedBrand() {
    
await t.expect(this.brandBtn.withText('View Deleted Brands').exists).ok({ timeout: 9000 })
        .click(this.clickViewDltBranBtn)

}
async verifyLogoText() {
    
    await t.expect(this.logoText.withText('Logo').exists).ok({ timeout: 9000 })          
    
    }
async verifyPackagingText() {

    await t.expect(this.logoText.withText('Packaging').exists).ok({ timeout: 9000 })          
    
    }
async verifyDeletedBrandsText() {

    await t.expect(this.deletedBrandsText.withText('Deleted Brands').exists).ok({ timeout: 9000 })          
    
    }
async fillBrandInfo(brandName, abv, beerStyle, desc) {

    await t.typeText(this.brandName, brandName, {
        paste: true,
        replace: true,

    });
    await t.click(this.coreOrSeasonal)
    await t.click(this.selectSeasonal) 
    .typeText(this.abv, abv, {
        paste: true,
        replace: true,

    });

    await t.click(this.AvailableDate)
    await t.click(this.selectAvailableDate)
    
   await t
     .typeText(this.beerStyle, beerStyle, {
        paste: true,
        replace: true,

    });
     await t.click(this.clickDesc)
     .typeText(this.description, desc, {
        paste: true,
        replace: true,

    });
    }

async fillBrandInfoWithBrandName(brandName) {
    await t
    .typeText(this.brandName, brandName) 
    }

async BrandWithNameExists(brandName, abv) {
    await t
    .typeText(this.brandName, brandName) 
    .typeText(this.abv, abv)
    }

async fillBrandInfoError(brandName, abv) {
    await t
    .typeText(this.brandName, brandName) 
    .typeText(this.abv, abv)
    .click(this.AvailableDate)
    }

async fillBrandInfoWithOutBrandName( abv, beerStyle, desc) {
    await t
    .click(this.coreOrSeasonal)
    .click(this.selectSeasonal) 
    .expect(this.badRequest.withText('Bad request. Missing required key-val pair name').exists).ok({ timeout: 9000 })          
    .typeText(this.abv, abv)
    .expect(this.badRequest.withText('Bad request. Missing required key-val pair name').exists).ok({ timeout: 9000 })          
    .click(this.AvailableDate)
    .click(this.selectAvailableDate)
    await t
        .typeText(this.beerStyle, beerStyle)
        .click(this.clickDesc)
        .typeText(this.description, desc)

    }
async editBrandInfo(brandName, abv, beerStyle, desc) {
    await t
    .selectText(this.brandName)
    .pressKey('delete')
    .typeText(this.brandName, brandName)  
    .click(this.coreOrSeasonal)
    .click(this.selectSeasonal) 
    .selectText(this.abv)
    .pressKey('delete')
    .typeText(this.abv, abv)
    .click(this.AvailableDate)
    .click(this.selectAvailableDate)
    
await t
    .typeText(this.beerStyle, beerStyle)
    .click(this.clickDesc)
    .selectText(this.description)
    .pressKey('delete')
    .typeText(this.description, desc)

    }
    
async brandPackagingInfo(containerUPC, retailPkgUPC, pkgTypeUPC, shilfLife, minPerOrder, vipNO) {
await t
    .click(this.clkAddBrandPkg)
    .click(this.clkPkgType)
    .typeText(this.containerUPC, containerUPC)
    .typeText(this.retailPkgUPC, retailPkgUPC)
    .typeText(this.pkgTypeUPC, pkgTypeUPC)
    .typeText(this.shilfLife, shilfLife)
    .typeText(this.minPerOrder, minPerOrder)
    .typeText(this.vipNO, vipNO)
    await t.click(this.pkgSaveBtn)        

}

async clickDoneBtn() {
    await t.expect(this.doneBtn.withText('Done').exists).ok({ timeout: 9000 })  
           .click(this.clkDoneBtn)        
    
    }
    
async clickDoneButton() {

    await t.expect(this.doneBtn.withText('Done').exists).ok({ timeout: 9000 })  
            .click(this.doneWithoutFillingForm)        
    
    }
async badRequestMsg() {

    await t.expect(this.badRequest.withText('Bad request. Missing required key-val pair name').exists).ok({ timeout: 9000 })          
    
    }
async checkedCreateAnother() {

    await t.click(this.clkCreateAnother)
    
}
async verifyErrorMsgBrandNameExists() {

    await t.expect(this.errorMsgBrandNameExist.withText('A brand with the same name already exists').exists).ok({ timeout: 9000 })          
  
}
async mustPosNo() {

    await t.expect(this.positiveNo.withText('Must be a positive number').exists).ok({ timeout: 9000 })          
  
}
async deactiviteMsg() {

    await t.expect(this.deactivitMsg.withText('Brand deactivated').exists).ok({ timeout: 9000 })          
  
}
async clickEditBrand() {

    await t.click(this.editBrand)          
  
}
async statusFilterActive(){
    await t.expect(this.statusActive.withText('Active').exists).ok({timeout: 9000})
    await t.click(this.statusActive)
}

async verifyStatusFilterActive(){
    await t.expect(this.filterStatusActive.exists).ok({timeout: 9000})
    await t.expect(this.filteredStatusActive.exists).ok({timeout: 9000})
}

async statusFilterInactive(){
    await t.expect(this.statusinactive.withText('Inactive').exists).ok({timeout: 9000})
    await t.click(this.statusinactive)
}

async verifyStatusFilterInactive(){
    await t.expect(this.filterStatusinactive.exists).ok({timeout: 9000})
    await t.expect(this.filteredStatusinactive.exists).ok({timeout: 9000})
}

async filterTypeCoreActive(){
    await t.expect(this.filterBycore.withText('Core').exists).ok({timeout: 9000})
    await t.click(this.filterBycore)
}

async verifyFilterTypeCore(){
    await t.expect(this.filterByCoreActive.exists).ok({timeout: 9000})
    await t.expect(this.filteredByCore.withText('Core').exists).ok({timeout: 9000})
}
async filterTypeSeasonalActive(){
    await t.expect(this.filterBySeasonal.withText('Seasonal').exists).ok({timeout: 9000})
    await t.click(this.filterBySeasonal)
}

async verifyFilterTypeSeasonal(){
    await t.expect(this.filterBySeasonalActive.exists).ok({timeout: 9000})
    await t.expect(this.filteredBySeasonal.withText('Seasonal').exists).ok({timeout: 9000})
}
async filterByBeerStyle(){
    await t.expect(this.beerFilterTree.exists).ok({timeout: 9000})
    await t.click(this.beerFilterTree)
    await t.typeText(this.beerFilterTree , 'india')
    await t.pressKey('enter')
}
async verifyFilterByBeerStyle(){
    await t.expect(this.filteredBySeasonal.withText('Seasonal').exists).ok({timeout: 9000})
}

async filterByBrand(){
    await t.expect(this.brandFilterTree.exists).ok({timeout: 9000})
    await t.click(this.brandFilterTree)
    await t.expect(this.selectBrand.exists).ok({timeout: 9000})
    await t.click(this.selectBrand)
}
async verifyFilterByBrand(){
    await t.expect(this.filteredBySeasonal.withText('Core').exists).ok({timeout: 9000})
}

async clickFullScreen(){
    await t.expect(this.clkFullScreen.exists).ok({timeout: 9000})
    await t.click(this.clkFullScreen)
}
async minimaxFullScreen(){

    await t.click(this.clkFullScreen)
}
async hideNavBar(){

    await t.click(this.navBar)
}
async clickDltBtn(){

    await t.click(this.dltBtn)
    await t.click(this.cnfm)
}
    
async clickBrandRestoreFromCore(){

    await t.click(this.restoreBrand)
}

async clickBrandRestoreFromSeasonals(){

    await t.click(this.brandRestoreSeasonals)
}

async verifyBrandRestoredMsg(){

    await t.expect(this.brandRestoreText.withText('Brand restored').exists).ok({timeout: 9000})
}
     
async addRtateRegistration(regNo) {

    await t
    .click(this.clickAddStateReg)
    .click(this.addState) 
    .click(this.selectState)
    .typeText(this.regNo, regNo)  
    .click(this.stateRegSaveBtn)
         
}

async verifyBrandDeactivatedMsg(){

    await t.expect(this.brandDeactivteMsg.withText('Brand deactivated').exists).ok({timeout: 9000})
}

async verifyStateRegEntry(){

    await t.expect(this.verifyStateRegtrationEntry.exists).ok({timeout: 9000})
}

async verifyProductExists(){

    await t.expect(this.porductExists.exists).ok({timeout: 9000})
}
    upload: Selector = Selector("input[type='file']")
    saveLogoBtn: Selector = Selector('.vicp-operate > a:nth-child(2)')
    clkUploadLogo: Selector =  Selector('div#brandEditor > div:nth-of-type(2) > div > div > div > img')

async uploadLogo(){

    await t
    .click(this.clkUploadLogo)
    .setFilesToUpload(this.upload, 'D:\logo.jpg')
    .click(this.saveLogoBtn);
}

}
