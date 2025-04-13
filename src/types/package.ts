export type PackageStatus = 'pending' | 'in_transit' | 'delivered' | 'delayed';

export interface PackageData {
  id: string;
  trackingNumber: string;
  customerName: string;
  customerEmail: string;
  origin: string;
  destination: string;
  status: PackageStatus;
  estimatedDelivery: string;
  weight: number;
  description: string;
  createdAt: string;
  updatedAt: string;
}