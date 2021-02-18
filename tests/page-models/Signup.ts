import { Selector, t } from 'testcafe';

export class Signup {
  retailerBtn: Selector = Selector(".v-radio [aria-label='Retailer'][value='retailer']");
  distributorBtn: Selector = Selector(".v-radio [aria-label='Distributor'][role='radio']");
  supplierBtn: Selector = Selector(".v-radio [aria-label='Supplier'][type='radio']");

  name: Selector = Selector("input[aria-label='Your Name']");
  email: Selector = Selector("input[aria-label='Email Address']");
  password: Selector = Selector("input[aria-label='Password']");

  signupBtn: Selector = Selector('form.v-form div.justify-center');
  company_supplier: Selector = Selector('#companySearch');

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

  //Dashboard
  signoutBtn: Selector = Selector(".sign-out");
  userAvatar: Selector = Selector(".user-block");
  disabledSignupBtn: Selector = Selector(".apply-button.v-btn--disabled[disabled='disabled']");

  //Company name is required
  companyNameReq: Selector = Selector('.v-messages__message')
  //Email must be valid
  emailvalidation: Selector = Selector('.v-messages__message')
  //
  passwordValidation: Selector = Selector('.v-messages__message')
  //Weak password
  weakPassword: Selector = Selector('.v-messages__message')
  //The user already exists.
  existsUser: Selector = Selector(".notification-content")

    async campanyNameReq(){
      await t.expect(this.companyNameReq.exists).ok({ timeout: 5000 });
      await t.expect(this.companyNameReq.withText('Company name is required').exists).ok()
    }

    async weakPass(){

      await t.expect(this.weakPassword.exists).ok({ timeout: 5000 });
      await t.expect(this.weakPassword.withText('Weak password').exists).ok()
    }
    async InvalidValidate (){

      await t.expect(this.emailvalidation.exists).ok({timeout:5000})
      await t.expect(this.emailvalidation.withText('Email must be valid').exists).ok()
    
    }
    async passValidate (){

      await t.expect(this.passwordValidation.exists).ok({timeout:5000})
      await t.expect(this.passwordValidation.withText('Password must be at least 8 characters long').exists).ok()

    }
    async verifyUserExists(){

      await t.expect(this.existsUser.exists).ok({timeout:20000})
      await t.expect(this.existsUser.withText('The user already exists.').exists).ok()
    }

  async selectUserType(user) {
    switch (user) {
      case 'retailer':
        await t.click(this.retailerBtn);
        break;
      case 'distributor':
        await t.click(this.distributorBtn);
        break;
      case 'supplier':
        await t.click(this.supplierBtn);
        break;
    }
  }
  async maximizeWindow() {
    await t.maximizeWindow();
  }
  async fillUserInfo(name, email, password, company) {
    await t
      .typeText(this.company_supplier, company)
      .typeText(this.name, name)
      .typeText(this.email, email)
      .typeText(this.password, password);
  }

  async fillHalfInfo(email, password, company) {
    await t
      .typeText(this.company_supplier, company)
      .typeText(this.email, email)
      .typeText(this.password, password);
  }
  async fillHalfInfoWithOutEmail(name, password, company) {
    await t
      .typeText(this.company_supplier, company)
      .typeText(this.name, name)
      .typeText(this.password, password);
  }

  async verifySignupBtnDisabled() {
    await t.expect(this.disabledSignupBtn.exists).ok({ timeout: 70000 });
  }
  

  async clickSignup() {
    await t.click(this.signupBtn);
  }

  async verifySignup() {
    await t.expect(this.userAvatar.exists).ok({ timeout: 70000 });
    await t.expect(this.signoutBtn.exists).ok();
  }

  async fillPaymentDetails(address1, address2, city, state, postalCode, phone, cardNumber, expirey, CVC, zip = '') {
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
      .switchToMainWindow();
  }
}
