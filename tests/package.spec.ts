import 'testcafe';
import { Selector, t } from 'testcafe';

import { Packaging } from './page-models/package';

const url = 'https://test.brewoptix.com/session/login';
const dataSet = require('./data.json');
const pack = new Packaging();

fixture('package').page(url)
    .beforeEach(async t => {

        t.fixtureCtx.randomEmail = `test+${Math.floor(Math.random() * 100000)}@gmail.com`; // generates random email 
    })

dataSet.forEach(data => {
    test('log in as a supplier and Verifies Containers,Retail Packaging, Package Types ', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();

    });

    test('log in as a supplier and Create new Container', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.clickOnAddContainer();
        await pack.createContainer("5");
        await pack.clickSaveBtn();
        await pack.verifycontainerSaveMsg()


    });

    test('Create new Container and Checked create another ', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.clickOnAddContainer();
        await pack.createContainerAndCreateAnother("5");
        await pack.clickSaveBtn();
        await pack.verifyCreateContainerForm();



    });

    test('shoud NOT be able to Create Container without filling the form', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.clickOnAddContainer();
        await pack.errorMsgLargerThan0();
        await pack.verifySaveBtnDisabled();


    });
    test('shoud NOT be able to Create Container with Type Field Empty', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.clickOnAddContainer();
        await pack.errorMsgLargerThan0();
        await pack.typeFieldEmpty('7');
        await pack.verifySaveBtnDisabled();


    });

    test('shoud NOT be able to Create Container with VOLUME Field Empty', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.clickOnAddContainer();
        await pack.errorMsgLargerThan0();
        await pack.volumeFieldEmpty();
        await pack.verifySaveBtnDisabled();


    });

    test('shoud NOT be able to Create Container with VOLUME UNIT Field Empty', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.clickOnAddContainer();
        await pack.errorMsgLargerThan0();
        await pack.volumeUnitFiledEmpty('8');
        await pack.verifySaveBtnDisabled();


    });

    test('shoud NOT be able to Create Container with TYPE and VOLUME Field Empty', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.clickOnAddContainer();
        await pack.errorMsgLargerThan0();
        await pack.typeAndVolumeEmpty();
        await pack.verifySaveBtnDisabled();
        await pack.errorMsgLargerThan0();



    });

    test('shoud NOT be able to Create Container with VOLUME and VOLUME UNIT Field Empty', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.clickOnAddContainer();
        await pack.errorMsgLargerThan0();
        await pack.volumeAndVolumeUnitEmpty();
        await pack.verifySaveBtnDisabled();
        await pack.errorMsgLargerThan0();



    });

    test('filled the container form and click on cancel Button', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.clickOnAddContainer();
        await pack.errorMsgLargerThan0();
        await pack.createContainer('23');
        await pack.clickCancel();



    });


    test('Verify Text Must be larger than 0 ', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.clickOnAddContainer();
        await pack.errorMsgLargerThan0();
        await pack.verifySaveBtnDisabled();


    });

    test('log in as a supplier and Edit Container ', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.clickEditContainer();
        await pack.editContainer('500')
        await pack.clickSaveBtn();
        await pack.verifycontainerSaveMsg();

    });
    test('log in as a supplier and Delete Container ', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.clickDeleteContainer();
        await pack.deleteContainerMsg();
    });
    ///////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////
    test('log in as a supplier and Create Retail Packaging ', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.createRetailPackage();
        await pack.verifyCreateRetailPackagingText();
        await pack.createRetailPackaging('56');
        await pack.clickSaveButton();
        await pack.retailPackageSaveMsg();
    });

    test('Create Retail Packaging and Checked Create another', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.createRetailPackage();
        await pack.verifyCreateRetailPackagingText();
        await pack.createRetailPackaging('2316');
        await pack.clickCreateAnother();
        await pack.clickSaveButton();
        await pack.verifyCreateRetailPackagingText();

    });


    test('should NOT be able to Create Retail Packaging with Container Field Empty', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.createRetailPackage();
        await pack.verifyCreateRetailPackagingText();
        await pack.contFieldEmpty('672');
        await pack.verifySaveBtnDisabled();

    });

    test('log in as a supplier and Edit the Retail Packaging', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.clickEditRetailPackaging();
        await pack.editRePack('3');
        await pack.clickSaveButton();
        await pack.verifyRetailPackagingText();


    });


    test('log in as a supplier and Delete the Retail Packaging', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.clickDeleteRetailPackaging();


    });
    ////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////Package Types////////////////////////////////////////////////////////
    test('log in as a supplier and Create Packaging', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.AddPackagingType();
        await pack.AddingPackaging('4', '6', '2', '10');
        await pack.clickSavePkgTypeBtn();
        await pack.pkgTypeSaveMsg();



    });

    test('Create Packaging Type and Checked Another Create', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.AddPackagingType();
        await pack.AddingPackaging('44', '12', '32', '1');
        await pack.createAnotherPackage();
        await pack.clickSavePkgTypeBtn();



    });

    test('log in as a supplier and should NOT be able to Create Packaging with Retail Package Field Empty ', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.AddPackagingType();
        await pack.AddingPackagingWithRetailPkgEmpty('44', '12', '32', '1');
        await pack.VerifypackDisabledBtn();

    });

    test('should NOT be able to Create Packaging with Number Of Retail Packages Field Empty ', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.AddPackagingType();
        await pack.AddingPackagingNoRetailFieldEmpty('44', '32', '1');
        await pack.VerifypackDisabledBtn();


    });

    test('should NOT be able to Create Packaging with Weight Field Empty ', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.AddPackagingType();
        await pack.AddingPackagingWeightEmpty('23', '2', '11');
        await pack.VerifypackDisabledBtn();


    });

    test('should NOT be able to Create Packaging with Packages Per Layer Field Empty ', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.AddPackagingType();
        await pack.AddingPackagingPkgLayerEmpty('5', '7', '11');
        await pack.VerifypackDisabledBtn();


    });

    test('should NOT be able to Create Packaging with Maximum Layer Field Empty ', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.AddPackagingType();
        await pack.AddingPackagingMaxLayerFieldEmpty('55', '77', '11');
        await pack.VerifypackDisabledBtn();


    });

    test('should NOT be able to Create Packaging with Retail Packaging and Number of Retail Packages Field Empty ', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.AddPackagingType();
        await pack.AddingPackagingRpAndNoPkgEmpty('55', '77', '11');
        await pack.VerifypackDisabledBtn();

    });

    test('should NOT be able to Create Packaging with Packages per Layer and Number of Maximum Layer Field Empty ', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.AddPackagingType();
        await pack.AddingPackagingPkgAndMaxLayerEmpty('12', '77');
        await pack.VerifypackDisabledBtn();

    });

    test('should NOT be able to Create Packaging with Retail Packages Packages per Layer and Number of Maximum Layer Field Empty ', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.AddPackagingType();
        await pack.AddingPackRtlWeightMaxLyrEmpty('22', '67');
        await pack.VerifypackDisabledBtn();



    });

    test('log in as a supplier and Delete Package type  ', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.deletePackageType();
    });

    test('log in as a supplier and Edit Packaging', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.clickEditPackaging()
        await pack.editPackagingType('33', '55', '77', '11');
        await pack.clickSavePkgTypeBtn();
        await pack.pkgTypeSaveMsg();


    });

    test('log in as a supplier and Edit Packaging And Click Cancel Button ', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.clickEditPackaging()
        await pack.editPackagingClickCancel('50', '2', '88', '231');
        await pack.clickEditPackagingCancelBtn()

    });

    test('log in as a supplier and Edit Only Two Feld And Click Cancel Button ', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.clickEditPackaging()
        await pack.editOnlyTwoClickCancel('88');
        await pack.clickEditPackagingCancelBtn()

    });
    test('Edit the Retail Packaging and Click Cancel Button ', async (t) => {

        await pack.maximizeWindow();
        await pack.loginSupplier(data.email, data.password);
        await pack.verifyLogin();
        await pack.verifyDeleteBrandBtn();
        await pack.verifyAddBrand();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.clickEditRetailPackaging();
        await pack.editRePack('3');
        await pack.clickEditRetailCancelBtn()



    });

    test('Signup with Retailer and Verify pre populated data of Container --tags {pre populated}', async (t) => {

        await pack.maximizeWindow();
        await pack.clickSignup();
        await pack.selectUserType('supplier');
        await pack.fillUserInfo(data.name, t.fixtureCtx.randomEmail, data.password, data.company);
        await pack.fillPaymentDetails(
            data.address1,
            data.address2,
            data.city,
            data.state,
            data.postalCode,
            data.phone,
            data.cardNumber,
            data.expirey,
            data.CVC,
            data.zip,
        );
        await pack.clickSignUpBtn();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.verifyContianerListItem()



    });

    test('Signup with Supplier and Verify pre populated data of Retail Packaging --tags {pre populated}', async (t) => {

        await pack.maximizeWindow();
        await pack.clickSignup();
        await pack.selectUserType('supplier');
        await pack.fillUserInfo(data.name, t.fixtureCtx.randomEmail, data.password, data.company);
        await pack.fillPaymentDetails(
            data.address1,
            data.address2,
            data.city,
            data.state,
            data.postalCode,
            data.phone,
            data.cardNumber,
            data.expirey,
            data.CVC,
            data.zip,
        );
        await pack.clickSignUpBtn();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.verifyRetailListItem();



    });

    test('Signup with Supplier and Verify pre populated data of Package Type --tags {pre populated}', async (t) => {

        await pack.maximizeWindow();
        await pack.clickSignup();
        await pack.selectUserType('supplier');
        await pack.fillUserInfo(data.name, t.fixtureCtx.randomEmail, data.password, data.company);
        await pack.fillPaymentDetails(
            data.address1,
            data.address2,
            data.city,
            data.state,
            data.postalCode,
            data.phone,
            data.cardNumber,
            data.expirey,
            data.CVC,
            data.zip,
        );
        await pack.clickSignUpBtn();
        await pack.clickOnPkg();
        await pack.verifyContainerText();
        await pack.verifyRetailPackagingText();
        await pack.verifyPackageTypesText();
        await pack.verifyPakacgeTypeListItem()


    });

})