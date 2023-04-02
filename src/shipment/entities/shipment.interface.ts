import mongoose, { Document, mongo } from 'mongoose';
import { ICarrier } from 'src/carrier/entities/carrier.interface';

export interface IShipment extends Document {
  date: Date;
  supplier: string;
  customer: string;
  material: string;
  carriage_price: number;
  material_price: number;
  totoal_price: number;
  driver_name: string;
  vehicle_number: string;
  cart_number: string;
  vehicle_volume: number;
  carrier: ICarrier | mongoose.Types.ObjectId;
}
