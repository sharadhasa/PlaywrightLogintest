
import { faker } from '@faker-js/faker';

export function generateCampaignName() {
  return faker.person.fullName();
  //return `CAM_${faker.string.alphanumeric(5)}_${Date.now()}`;
}

export function generateContactName() {
  return faker.person.fullName();
}

export function generatePhone() {
  return `9${faker.number.int({ min: 100000000, max: 999999999 })}`;
}

export function generateTargetSize() {
  return faker.number.int({ min: 10, max: 1000 });
}