export function generateCampaignName(prefix: string = 'Sha'): string {
  return `${prefix}_${Date.now().toString(36).slice(-5)}`;
}

export function generateTargetSize(max: number = 1000): string {
  return Math.floor(Math.random() * max).toString();
}