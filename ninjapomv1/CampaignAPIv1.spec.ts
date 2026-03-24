import { test, expect } from '../fixtures/apiFixture';
import { readJSON } from '../utils/readJson';
import { generateCampaignName, generateTargetSize } from '../utils/TestDataFaker';

test.describe.serial('Campaign API CRUD Suite', () => {
  test('Campaign CRUD API flow with logs', async ({ apiContext }) => {
    console.log('Starting Campaign CRUD API Test');

    const data = readJSON('./test_data/campaign.json');

    // ---------------- CREATE ----------------
    console.log('\nSTEP 1: CREATE CAMPAIGN');

    const createPayload = {
      ...data.createCampaign,
      campaignName: generateCampaignName(),
      targetSize: generateTargetSize()
    };

    console.log('Create Payload:', createPayload);

    const createResponse = await apiContext.post('/campaign', {
      data: createPayload
    });

    const createStatus = createResponse.status();
    const createBody = await createResponse.text();

    console.log('CREATE Status:', createStatus);
    console.log('CREATE Response Body:', createBody);

    expect(createStatus, `Create failed. Body: ${createBody}`).toBe(201);

    const createJson = JSON.parse(createBody);
    const campaignId = createJson.campaignId;

    console.log('Generated Campaign ID:', campaignId);

    // ---------------- UPDATE ----------------
    console.log('\nSTEP 2: UPDATE CAMPAIGN');

    const updatePayload = {
      ...data.updateCampaign,
      campaignName: generateCampaignName(),
      targetSize: generateTargetSize()
    };

    console.log('Update Payload:', updatePayload);

    const updateResponse = await apiContext.put(`/campaign?campaignId=${campaignId}`, {
      data: updatePayload
    });

    const updateStatus = updateResponse.status();
    const updateBody = await updateResponse.text();

    console.log('UPDATE Status:', updateStatus);
    console.log('UPDATE Response Body:', updateBody);

    expect(updateStatus, `Update failed. Body: ${updateBody}`).toBe(200);

    // ---------------- DELETE ----------------
    console.log('\nSTEP 3: DELETE CAMPAIGN');

    const deleteResponse = await apiContext.delete(`/campaign?campaignId=${campaignId}`);

    const deleteStatus = deleteResponse.status();
    const deleteBody = await deleteResponse.text();

    console.log('DELETE Status:', deleteStatus);
    console.log('DELETE Response Body:', deleteBody);

    expect(deleteStatus, `Delete failed. Body: ${deleteBody}`).toBe(204);

    console.log('\nCampaign CRUD Test Completed Successfully');
  });
});


















/*import { test, expect } from '@playwright/test';
import { readJSON } from '../utils/readJson';
import { getAPIContext } from '../utils/apiHelper';
import { generateApiCampaignName, generateApiTargetSize } from '../utils/APITestDataHelper';

test.describe.serial('Campaign API CRUD Suite', () => {
  test('Campaign CRUD API flow with logs', async () => {
    console.log('Starting Campaign CRUD API Test');

    const apiContext = await getAPIContext();
    const data = readJSON('./test_data/campaign.json');

    try {
      // ---------------- CREATE ----------------
      console.log('\nSTEP 1: CREATE CAMPAIGN');

      const createPayload = {
        ...data.createCampaign,
        campaignName: generateApiCampaignName('Campaign'),
        targetSize: generateApiTargetSize()
      };

      console.log('Create Payload:', createPayload);

      const createResponse = await apiContext.post('/campaign', {
        data: createPayload
      });

      const createStatus = createResponse.status();
      const createBody = await createResponse.text();

      console.log('CREATE Status:', createStatus);
      console.log('CREATE Response Body:', createBody);

      expect(createStatus, `Create failed. Body: ${createBody}`).toBe(201);

      const createJson = JSON.parse(createBody);
      const campaignId = createJson.campaignId;

      console.log('Generated Campaign ID:', campaignId);

      // ---------------- UPDATE ----------------
      console.log('\nSTEP 2: UPDATE CAMPAIGN');

      const updatePayload = {
        ...data.updateCampaign,
        campaignName: generateApiCampaignName('UpdatedCampaign'),
        targetSize: generateApiTargetSize()
      };

      console.log('Update Payload:', updatePayload);

      const updateResponse = await apiContext.put(`/campaign?campaignId=${campaignId}`, {
        data: updatePayload
      });

      const updateStatus = updateResponse.status();
      const updateBody = await updateResponse.text();

      console.log('UPDATE Status:', updateStatus);
      console.log('UPDATE Response Body:', updateBody);

      expect(updateStatus, `Update failed. Body: ${updateBody}`).toBe(200);

      const updateJson = JSON.parse(updateBody);
      console.log('Updated Campaign Data:', updateJson);

      // ---------------- DELETE ----------------
      console.log('\nSTEP 3: DELETE CAMPAIGN');

      const deleteResponse = await apiContext.delete(`/campaign?campaignId=${campaignId}`);

      const deleteStatus = deleteResponse.status();
      const deleteBody = await deleteResponse.text();

      console.log('DELETE Status:', deleteStatus);
      console.log('DELETE Response Body:', deleteBody);

      expect(deleteStatus, `Delete failed. Body: ${deleteBody}`).toBe(204);

      console.log('\nCampaign CRUD Test Completed Successfully');
    } finally {
      await apiContext.dispose();
    }
  });
});



/*



 import { test, expect } from '@playwright/test';
import { getAPIContext } from '../utils/apiHelper';

test.describe.serial('Campaign API CRUD Suite', () => {
  test('Campaign CRUD API flow with logs', async () => {
    console.log('Starting Campaign CRUD API Test');

    const apiContext = await getAPIContext();
    const uniqueValue = Date.now();

    console.log('\nSTEP 1: CREATE CAMPAIGN');

    const createPayload = {
      campaignName: `Campaign ${uniqueValue}`,
      campaignStatus: 'Active',
      targetSize: 500,
      expectedCloseDate: '2026-04-30',
      targetAudience: 'Retail Customers',
      description: 'Created from Playwright'
    };

    const createResponse = await apiContext.post('/campaign', {//POST Campaign
      data: createPayload
    });

    const createStatus = createResponse.status();
    const createBody = await createResponse.text();

    console.log('CREATE Status:', createStatus);
    console.log('CREATE Response Body:', createBody);

    expect(createStatus, `Create failed. Body: ${createBody}`).toBe(201);

    const createJson = JSON.parse(createBody);
    const campaignId = createJson.campaignId;

    console.log('Generated Campaign ID:', campaignId);

    console.log('\nSTEP 2: UPDATE CAMPAIGN');

    const updatePayload = {
      campaignName: `Updated Campaign ${uniqueValue}`,
      campaignStatus: 'Completed',
      targetSize: 300,
      expectedCloseDate: '2026-05-15',
      targetAudience: 'Updated Audience',
      description: 'Updated from Playwright'
    };

    const updateResponse = await apiContext.put(`/campaign?campaignId=${campaignId}`, {// Update PUT campaign
      data: updatePayload
    });

    const updateStatus = updateResponse.status();
    const updateBody = await updateResponse.text();

    console.log('UPDATE Status:', updateStatus);
    console.log('UPDATE Response Body:', updateBody);

    expect(updateStatus, `Update failed. Body: ${updateBody}`).toBe(200);

    console.log('\nSTEP 3: DELETE CAMPAIGN');

    const deleteResponse = await apiContext.delete(`/campaign?campaignId=${campaignId}`);

    const deleteStatus = deleteResponse.status();
    const deleteBody = await deleteResponse.text();

    console.log('DELETE Status:', deleteStatus);
    console.log('DELETE Response Body:', deleteBody);

    expect(deleteStatus, `Delete failed. Body: ${deleteBody}`).toBe(204);

    console.log('\nCampaign CRUD Test Completed Successfully');

    await apiContext.dispose();
  });
});*/