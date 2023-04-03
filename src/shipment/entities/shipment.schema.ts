import { IShipment } from './shipment.interface';
import mongoose, { Schema } from 'mongoose';

export const shipmentSchema = new Schema<IShipment>(
  {
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
    supplier: {
      type: String,
      required: true,
      enum: ['Supplier 1', 'Supplier 2', 'Supplier 3'],
    },
    customer: {
      type: String,
      required: true,
      enum: ['Customer 1', 'Customer 2', 'Customer 3'],
    },
    material: {
      type: String,
      required: true,
      enum: ['Material 1', 'Material 2', 'Material 3'],
    },
    carriage_price: {
      type: Number,
      required: true,
    },
    material_price: {
      type: Number,
      required: true,
    },
    vehicle_number: {
      type: String,
      required: true,
    },
    cart_number: {
      type: String,
      required: true,
    },
    vehicle_volume: {
      type: Number,
      required: true,
    },
    driver_name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

shipmentSchema.virtual('total_price').get(function (): Number {
  return this.carriage_price * this.material_price * this.vehicle_volume;
});

module.exports = mongoose.model<IShipment>('Shipment', shipmentSchema);
