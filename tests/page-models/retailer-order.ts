import { Selector, t } from 'testcafe';
export class Retailer {

letsGetStarted: Selector = Selector('*')
acceptTourActionButton: Selector = Selector ('.v-tour .tour-step-actions button')
inviteNewUsers: Selector = Selector('.v-step__content p')
userEmail: Selector = Selector('.v-step__content p')
addAccount: Selector = Selector('.v-step__content p')
accountsPage: Selector = Selector(".retailer-menu-wrapper [href='/retailer/accounts']")
manageaccount: Selector = Selector('.v-step__content p')
addNewAccount: Selector = Selector('.v-step__content p')
brandsPage: Selector = Selector(".retailer-menu-wrapper [href='/retailer/brands']")
brandScreen: Selector = Selector(".v-step__content p")
brandFilter: Selector = Selector('.v-step__content p')
brandDetailView: Selector = Selector('.v-step__content p')
purchaseOrderPage: Selector = Selector(".retailer-menu-wrapper [href='/retailer/purchase-orders']")
newPurchaseOrder: Selector = Selector('.v-step__content p') 
addNewDistributor: Selector = Selector(".action-header .v-retailer-add-account [type='button']")
newDistributor: Selector = Selector (".app-card .app-card-content .v-card span")
searchDistributor: Selector = Selector(".v-retailer-select-account .v-text-field__slot input[placeholder='Search'][type='text']")
acceptVTour: Selector = Selector ('*')
distributorSaveMessage: Selector = Selector("*")
confirmnNewDistributor: Selector = Selector("#inspire > div:nth-child(3) > div > div > div.v-card__actions > button.v-btn.v-btn--flat.theme--light.green--text.text--darken-1 > div")
distributorConnectionConfirmation: Selector = Selector(".v-dialog--active button .v-btn__content")
distributorsList: Selector = Selector (".v-card--hover")
distributorTitle: Selector = Selector ("*")



async getStarted() {
    await t.expect(this.letsGetStarted.withText("Hi! Thanks for joining BrewOptix. Let's get you started and on your way to placing your first order.").exists).ok({ timeout: 20000 })
    await t.click(this.acceptTourActionButton)
  }

async inviteNewUser() {
    await t.expect(this.inviteNewUsers.withText('Does anyone else need access? If so, click on "Invite New User" and add them to your account.').exists).ok({ timeout: 20000 })
    await t.click(this.acceptTourActionButton)
}
async userEmails() {
    await t.expect(this.userEmail.withText('BrewOptix emails you copies of the Purchase Orders every time someone creates or updates an order. As the primary contact, you automatically receive these emails.').exists).ok({ timeout: 9000 })
    await t.click(this.acceptTourActionButton)
    await t.wait(1000)
    await t.expect(this.userEmail.withText('If you would like another individual or general email address to receive these emails, please enter it on this line and press enter.').exists).ok({ timeout: 9000 })
    await t.click(this.acceptTourActionButton)
  }

async addAccounts() {
    await t.wait(1000)
    await t.expect(this.addAccount.withText("Cool beans! Now let's connect to your first account. Please navigate to Accounts section to add new accounts.").exists).ok({ timeout: 9000 })
    await t.click(this.acceptTourActionButton)
}

async accessAccountsPage() {
    await t.expect(this.accountsPage.exists).ok({ timeout: 9000 })
    await t.click(this.accountsPage)
}

async manageAccounts() {
    await t.wait(1000)
    await t.expect(this.manageaccount.withText("You will be able to view and manage all the accounts you have connected to on this screen.").exists).ok({ timeout: 9000 })
    await t.click(this.acceptTourActionButton)    
    }

async addNewAccounts() {
    await t.wait(1000)
    await t.expect(this.addNewAccount.withText('Let\'s connect to our first account by clicking on "Add New Account".').exists).ok({ timeout: 9000 })
    await t.click(this.acceptTourActionButton)         
    }

async accessBrandsPage() {
    await t.expect(this.brandsPage.exists).ok({ timeout: 9000 })
    await t.click(this.brandsPage)
    await t.wait(1000)
}

async brandsScreen() {
    await t.wait(1000)
    await t.expect(this.brandScreen.withText("The Brand Screen allows you to access detailed information about the Brands your accounts are offering.").exists).ok({ timeout: 9000 })
    await t.click(this.acceptTourActionButton)   
    }

async brandFilters() {
    await t.wait(1000)
    await t.expect(this.brandFilter.withText("If you are looking for anything specific, you can use the filters to find styles, brands, account types, etc.").exists).ok({ timeout: 9000 })
    await t.click(this.acceptTourActionButton) 
    }

async brandDetailsView() {
    await t.wait(1000)
    await t.expect(this.brandDetailView.withText("When you find the Brand you are looking for, double click on the item for a more detailed view.").exists).ok({ timeout: 9000 })
    await t.click(this.acceptTourActionButton)  
    }

async accessPurchaseOrders() {
    await t.wait(1000)
    await t.expect(this.purchaseOrderPage.exists).ok({ timeout: 9000 })
    await t.click(this.purchaseOrderPage)
}

async newPurchaseOrders() {
    await t.wait(1000)
    await t.expect(this.newPurchaseOrder.withText("Let's place our first order by clicking").exists).ok({ timeout: 9000 })
    await t.click(this.acceptTourActionButton) 
    }

async addDistributor() {
    await t.expect(this.accountsPage.exists).ok({ timeout: 20000 })
    await t.click(this.accountsPage) 
    await t.expect(this.addNewDistributor.exists).ok({ timeout: 9000 })
    await t.click(this.addNewDistributor) 
    await t.wait(1000)
    await t.expect(this.acceptVTour.exists).ok({ timeout: 9000 })
    await t.click(this.acceptTourActionButton) 
    await t.expect(this.searchDistributor.exists).ok({ timeout: 9000 })
    await t.typeText(this.searchDistributor,'Test Zone')
    await t.expect(this.newDistributor.exists).ok({ timeout: 9000 })
    await t.click(this.newDistributor) 
    await t.expect(this.confirmnNewDistributor.exists).ok({ timeout: 9000 })
    await t.click(this.confirmnNewDistributor) 
    await t.expect(this.distributorSaveMessage.withText('Distributor saved').exists).ok({ timeout: 20000 })
    await t.expect(this.distributorConnectionConfirmation.exists).ok({ timeout: 9000 })
    await t.click(this.distributorConnectionConfirmation) 
    }

async verifyNewDistributor() {
    await t.expect(this.accountsPage.exists).ok({ timeout: 9000 })
    await t.click(this.accountsPage) 
    await t.expect(this.distributorsList.exists).ok({ timeout: 9000 })
    await t.expect(this.distributorTitle.withText("Test Zone Lab").exists).ok({ timeout: 9000 })
    }

}

