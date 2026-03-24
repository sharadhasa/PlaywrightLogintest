import { test, expect } from '../fixtures/apiFixture';
import { generateContactName, generatePhone } from '../utils/TestDataFaker';
import contactData from '../test_data/campaign.json';

test('Create + Update + Delete Contact API', async ({ apiContext }) => {
  const campaignId = 'CAM09242';
  let contactId = '';

  // ---------- CREATE ----------
  const createPayload = {
    ...contactData.createContact,
    contactName: generateContactName(),
    mobile: generatePhone()
  };

  const createResponse = await apiContext.post(`/contact?campaignId=${campaignId}`, {
    data: createPayload
  });

  const createStatus = createResponse.status();
  const createBodyText = await createResponse.text();

  console.log('Create URL:', createResponse.url());
  console.log('Create Status:', createStatus);
  console.log('Create Response:', createBodyText);

  expect(createStatus, `Create failed. Body: ${createBodyText}`).toBe(201);

  const createBody = JSON.parse(createBodyText);
  contactId = createBody.contactId;

  console.log('Created Contact ID:', contactId);
  expect(contactId).toBeTruthy();

  // ---------- UPDATE ----------
  const updatePayload = {
    ...contactData.updateContact,
    contactName: generateContactName(),
    mobile: generatePhone()
  };

  const updateResponse = await apiContext.put(
    `/contact?contactId=${contactId}&campaignId=${campaignId}`,
    {
      data: updatePayload
    }
  );

  const updateStatus = updateResponse.status();
  const updateBodyText = await updateResponse.text();

  console.log('Update URL:', updateResponse.url());
  console.log('Update Status:', updateStatus);
  console.log('Update Response:', updateBodyText);

  expect(updateStatus, `Update failed. Body: ${updateBodyText}`).toBe(200);

  // ---------- DELETE ----------
  const deleteResponse = await apiContext.delete(`/contact?contactId=${contactId}`);

  const deleteStatus = deleteResponse.status();
  const deleteBodyText = await deleteResponse.text();

  console.log('Delete URL:', deleteResponse.url());
  console.log('Delete Status:', deleteStatus);
  console.log('Delete Response:', deleteBodyText);

  expect(deleteStatus, `Delete failed. Body: ${deleteBodyText}`).toBe(204);
});

















/*import { test, expect, request } from '@playwright/test';
import { generateApiContactName, generateApiPhone } from '../utils/APITestDataHelper';
import contactData from '../test_data/campaign.json';

test('Create + Update + Delete Contact API', async () => {
  const apiContext = await request.newContext({
    baseURL: 'http://49.249.28.218:8098',
    httpCredentials: {
      username: 'rmgyantra',
      password: 'rmgy@9999'
    },
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });

  const campaignId = 'CAM09242';
  let contactId = '';

  try {
    // ---------- CREATE ----------
    const createPayload = {
      ...contactData.createContact,
      contactName: generateApiContactName(),
      mobile: generateApiPhone()
    };

    const createResponse = await apiContext.post(`/contact?campaignId=${campaignId}`, {
      data: createPayload
    });

    const createStatus = createResponse.status();
    const createBodyText = await createResponse.text();

    console.log('Create URL:', createResponse.url());
    console.log('Create Status:', createStatus);
    console.log('Create Response:', createBodyText);

    expect(createStatus, `Create failed. Body: ${createBodyText}`).toBe(201);

    const createBody = JSON.parse(createBodyText);
    contactId = createBody.contactId;

    console.log('Created Contact ID:', contactId);
    expect(contactId).toBeTruthy();

    // ---------- UPDATE ----------
    const updatePayload = {
      ...contactData.updateContact,
      contactName: generateApiContactName('UpdatedContact'),
      mobile: generateApiPhone()
    };

    const updateResponse = await apiContext.put(
      `/contact?contactId=${contactId}&campaignId=${campaignId}`,
      {
        data: updatePayload
      }
    );

    const updateStatus = updateResponse.status();
    const updateBodyText = await updateResponse.text();

    console.log('Update URL:', updateResponse.url());
    console.log('Update Status:', updateStatus);
    console.log('Update Response:', updateBodyText);

    expect(updateStatus, `Update failed. Body: ${updateBodyText}`).toBe(200);

    // ---------- DELETE ----------
    const deleteResponse = await apiContext.delete(`/contact?contactId=${contactId}`);

    const deleteStatus = deleteResponse.status();
    const deleteBodyText = await deleteResponse.text();

    console.log('Delete URL:', deleteResponse.url());
    console.log('Delete Status:', deleteStatus);
    console.log('Delete Response:', deleteBodyText);

    expect(deleteStatus, `Delete failed. Body: ${deleteBodyText}`).toBe(204);
  } finally {
    await apiContext.dispose();
  }
});























/*import { test, expect, request } from '@playwright/test';
import { generateApiContactName, generateApiPhone } from '../utils/APITestDataHelper';

test('Create + Update + Delete Contact API', async () => {
  const apiContext = await request.newContext({
    baseURL: 'http://49.249.28.218:8098',
    httpCredentials: {
      username: 'rmgyantra',
      password: 'rmgy@9999'
    },
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });

  const campaignId = 'CAM09242';
  let contactId = '';

  try {
    // ---------- CREATE ----------
    const createPayload = {
      contactName: generateApiContactName(),
      organization: 'Org_U4',
      title: 'QA',
      department: '',
      officePhone: '',
      mobile: generateApiPhone(),
      email: ''
    };

    const createResponse = await apiContext.post(`/contact?campaignId=${campaignId}`, {
      data: createPayload
    });

    const createStatus = createResponse.status();
    const createBodyText = await createResponse.text();

    console.log('Create URL:', createResponse.url());
    console.log('Create Status:', createStatus);
    console.log('Create Response:', createBodyText);

    expect(createStatus, `Create failed. Body: ${createBodyText}`).toBe(201);

    const createBody = JSON.parse(createBodyText);
    contactId = createBody.contactId;

    console.log('Created Contact ID:', contactId);
    expect(contactId).toBeTruthy();

    // ---------- UPDATE ----------
    const updatePayload = {
      contactName: generateApiContactName('UpdatedContact'),
      organizationName: 'Org_U4_Updated',
      title: 'Senior QA',
      department: 'QA Dept',
      officePhone: '1000000007',
      mobile: generateApiPhone(),
      email: 'updated@example.com'
    };

    const updateResponse = await apiContext.put(
      `/contact?contactId=${contactId}&campaignId=${campaignId}`,
      {
        data: updatePayload
      }
    );

    const updateStatus = updateResponse.status();
    const updateBodyText = await updateResponse.text();

    console.log('Update URL:', updateResponse.url());
    console.log('Update Status:', updateStatus);
    console.log('Update Response:', updateBodyText);

    expect(updateStatus, `Update failed. Body: ${updateBodyText}`).toBe(200);

    // ---------- DELETE ----------
    const deleteResponse = await apiContext.delete(`/contact?contactId=${contactId}`);

    const deleteStatus = deleteResponse.status();
    const deleteBodyText = await deleteResponse.text();

    console.log('Delete URL:', deleteResponse.url());
    console.log('Delete Status:', deleteStatus);
    console.log('Delete Response:', deleteBodyText);

    expect(deleteStatus, `Delete failed. Body: ${deleteBodyText}`).toBe(204);
  } finally {
    await apiContext.dispose();
  }
});






















/*import { test, expect, request } from '@playwright/test';
import { generateApiContactName, generateApiPhone } from '../utils/APITestDataHelper';

test('Create + Delete Contact API', async () => {
  const apiContext = await request.newContext({
    baseURL: 'http://49.249.28.218:8098',
    httpCredentials: {
      username: 'rmgyantra',
      password: 'rmgy@9999'
    },
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });

  const campaignId = 'CAM09242';
  let contactId = '';

  try {
    // ---------- CREATE ----------
    const createPayload = {
      contactName: generateApiContactName(),
      organization: 'Org_U4',
      title: 'QA',
      department: '',
      officePhone: '',
      mobile: generateApiPhone(),
      email: ''
    };

    const createResponse = await apiContext.post(`/contact?campaignId=${campaignId}`, {
      data: createPayload
    });

    const createStatus = createResponse.status();
    const createBodyText = await createResponse.text();

    console.log('Create URL:', createResponse.url());
    console.log('Create Status:', createStatus);
    console.log('Create Response:', createBodyText);

    expect(createStatus, `Create failed. Body: ${createBodyText}`).toBe(201);

    const createBody = JSON.parse(createBodyText);
    contactId = createBody.contactId;

    console.log('Created Contact ID:', contactId);
    expect(contactId).toBeTruthy();

    // ---------- DELETE ----------
    const deleteResponse = await apiContext.delete(`/contact?contactId=${contactId}`);

    const deleteStatus = deleteResponse.status();
    const deleteBodyText = await deleteResponse.text();

    console.log('Delete URL:', deleteResponse.url());
    console.log('Delete Status:', deleteStatus);
    console.log('Delete Response:', deleteBodyText);

    expect(deleteStatus, `Delete failed. Body: ${deleteBodyText}`).toBe(204);
  } finally {
    await apiContext.dispose();
  }
});















/*import { test, expect, request } from '@playwright/test';
import { generateApiContactName, generateApiPhone } from '../utils/APITestDataHelper';

test('Create + Update + Delete Contact API', async () => {
  const apiContext = await request.newContext({
    baseURL: 'http://49.249.28.218:8098',
    httpCredentials: {
      username: 'rmgyantra',
      password: 'rmgy@9999'
    },
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });

  const campaignId = 'CAM09242';
  let contactId = '';

  try {
    // ---------- CREATE ----------
    const createPayload = {
      contactName: generateApiContactName(),
      organization: 'Org_U4',
      title: 'QA',
      department: '',
      officePhone: '',
      mobile: generateApiPhone(),
      email: ''
    };

    const createResponse = await apiContext.post(`/contact?campaignId=${campaignId}`, {
      data: createPayload
    });

    const createStatus = createResponse.status();
    const createBodyText = await createResponse.text();

    console.log('Create Status:', createStatus);
    console.log('Create Response:', createBodyText);

    expect(createStatus, `Create failed. Body: ${createBodyText}`).toBe(201);

    const createBody = JSON.parse(createBodyText);
    contactId = createBody.contactId;

    console.log('Contact ID:', contactId);

    // ---------- UPDATE ----------
    const updatePayload = {
      contactName: generateApiContactName('Updated'),
      organization: 'Org_U4_Updated',
      title: 'Senior QA',
      department: '',
      officePhone: '',
      mobile: generateApiPhone(),
      email: ''
    };

    const updateResponse = await apiContext.put(`/contact/${contactId}?campaignId=${campaignId}`, {
      data: updatePayload
    });

    const updateStatus = updateResponse.status();
    const updateBodyText = await updateResponse.text();

    console.log('Update Status:', updateStatus);
    console.log('Update Response:', updateBodyText);

    expect(updateStatus, `Update failed. Body: ${updateBodyText}`).toBe(200);

    // ---------- DELETE ----------
    const deleteResponse = await apiContext.delete(`/contact/${contactId}`);

    const deleteStatus = deleteResponse.status();
    const deleteBodyText = await deleteResponse.text();

    console.log('Delete Status:', deleteStatus);
    console.log('Delete Response:', deleteBodyText);

    expect(deleteStatus, `Delete failed. Body: ${deleteBodyText}`).toBe(200);

  } finally {
    await apiContext.dispose();
  }
});














/*import { test, expect, request } from '@playwright/test';

test('Create Contact API - Simple', async () => {

  const apiContext = await request.newContext({
    baseURL: 'http://49.249.28.218:8098',
    httpCredentials: {
      username: 'rmgyantra',
      password: 'rmgy@9999'
    }
  });

  const campaignId = 'CAM09242'; // use any valid campaignId

  const payload = {
    contactName: 'Sharadhap_U1',
    organization: 'Org_U4',
    title: 'QA',
    department: '',
    officePhone: '',
    mobile: '9776579210',
    email: ''
  };
  

  const response = await apiContext.post(`/contact?campaignId=${campaignId}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    data: payload
  });

  const status = response.status();
  const body = await response.text();

  console.log('Status:', status);
  console.log('Response:', body);

  expect(status).toBe(201);

  await apiContext.dispose();
});*/