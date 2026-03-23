export function generateApiCampaignName(prefix: string = 'Campaign'): string {
  return `${prefix}_${Date.now().toString(36).slice(-5)}`;
}

export function generateApiTargetSize(max: number = 1000): number {
  return Math.floor(Math.random() * max);
}
export function generateApiContactName(prefix: string = 'Contact'): string {
  return `${prefix}_${Date.now().toString(36).slice(-5)}`;
}

export function generateApiPhone(): string {
  return `9${Math.floor(100000000 + Math.random() * 900000000)}`;
}