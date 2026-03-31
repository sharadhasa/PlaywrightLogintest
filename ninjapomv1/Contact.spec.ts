import { test, expect } from '../fixtures/uiFixture';
import { generateContactName, generatePhone } from '../utils/TestDataFaker';

test.setTimeout(70000);

test('Create contact using POM', async ({ contactPage }) => {
  const contactName = generateContactName();
  const phone = generatePhone();

  const contactId = await contactPage.createContact({
    organization: 'Orgtekarch',
    title: 'Manager',
    contactName,
    mobile: phone
  });

  console.log('Contact ID:', contactId);

  expect(contactId).toContain('CON');
  expect(contactId).not.toBe('');

  await contactPage.searchContactById(contactId);
  await contactPage.verifySearchedContactId(contactId);
});