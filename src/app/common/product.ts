export class Product {
  id?: string;
  sku?: string;
  name?: string;
  description?: string;
  unitPrice: number = 0;
  imageUrl?: string;
  active?: boolean;
  unitsInStock: number = 0;
  dateCreated?: Date;
  lastUpdated?: Date;
}
