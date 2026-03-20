import { test, expect } from '@playwright/test';
import { getLoggedInPage } from '../utils/appLogin';
import { CampaignPage } from '../pages/CampaignPage';
test.setTimeout(60000); 

test('Login -> Campaigns -> Create Campaign', async ({ browser }) => {
  const page = await getLoggedInPage(browser);
  const campaignPage = new CampaignPage(page);

  const campaignName = 'Sha_' + Date.now().toString(36).slice(-5);
  const targetSize = Math.floor(Math.random() * 1000);

  await campaignPage.createCampaign(campaignName, targetSize.toString());

  const campaignId = await campaignPage.getCreatedCampaignId();

  expect(campaignId).toContain('CAM');
  expect(campaignId).not.toBe('');

  await campaignPage.searchCampaignById(campaignId);
  await campaignPage.verifySearchedCampaignId(campaignId);
});
