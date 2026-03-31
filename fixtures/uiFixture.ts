


import { test as base, expect, type Page, type Browser } from '@playwright/test';
import { getLoggedInPage } from '../utils/appLogin';
import { CampaignPage } from '../pages/CampaignPage';
import { ContactPage } from '../pages/ContactPage';

type UiFixtures = {
  loggedInPage: Page;
  campaignPage: CampaignPage;
  contactPage: ContactPage;
};

export const test = base.extend<UiFixtures>({
  loggedInPage: async ({ browser }, use) => {
    const page = await getLoggedInPage(browser as Browser);
    await use(page);
    await page.close();
  },

  campaignPage: async ({ loggedInPage }, use) => {
    const campaignPage = new CampaignPage(loggedInPage);
    await use(campaignPage);
  },

  contactPage: async ({ loggedInPage }, use) => {
    const contactPage = new ContactPage(loggedInPage);
    await use(contactPage);
  }
});

export { expect };





















/*import { test as base, expect, type Page, type Browser } from '@playwright/test';
import { getLoggedInPage } from '../utils/appLogin';
import { CampaignPage } from '../pages/CampaignPage';
import { ContactPage } from '../pages/ContactPage';
// import { LeadPage } from '../pages/LeadPage';
// import { OpportunityPage } from '../pages/OpportunityPage';

type UiFixtures = {
  loggedInPage: Page;
  campaignPage: CampaignPage;
  // contactPage: ContactPage;
  // leadPage: LeadPage;
  // opportunityPage: OpportunityPage;
};

export const test = base.extend<UiFixtures>({
  loggedInPage: async ({ browser }, use) => {
    const page = await getLoggedInPage(browser as Browser);
    await use(page);
    await page.close();
  },

  campaignPage: async ({ loggedInPage }, use) => {
    const campaignPage = new CampaignPage(loggedInPage);
    await use(campaignPage);
  },

  ContactPage: async ({ loggedInPage }, use) => {
     const contactPage = new ContactPage(loggedInPage);
     await use(contactPage);
  },//

  // leadPage: async ({ loggedInPage }, use) => {
  //   const leadPage = new LeadPage(loggedInPage);
  //   await use(leadPage);
  // },

  // opportunityPage: async ({ loggedInPage }, use) => {
  //   const opportunityPage = new OpportunityPage(loggedInPage);
  //   await use(opportunityPage);
  // }
});*/

/*
export { expect };*/