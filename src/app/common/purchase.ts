import { Address } from './address';
import { Customer } from './customer';
import { Order } from './order';
import { OrderItem } from './order-item';

export class Purchase {
  constructor(
    public customer: Customer,
    public shippingAddress: Address,
    public billingAddress: Address,
    public order: Order,
    public orderItems: OrderItem[]
  ) {}
}
