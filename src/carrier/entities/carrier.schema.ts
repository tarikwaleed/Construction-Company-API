import mongoose, { Schema } from 'mongoose';
import { ICarrier } from './carrier.interface';
export const carrierSchema = new Schema<ICarrier>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    shipmentsCostHistory: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

carrierSchema.virtual('shipments', {
  ref: 'Shipment',
  localField: '_id',
  foreignField: 'carrier_id',
  justOne: false,
  populate: true,
});

carrierSchema.virtual('shipmentsCount', {
  ref: 'Shipment',
  localField: '_id',
  foreignField: 'carrier_id',
  count: true,
});

carrierSchema.virtual('totalShipmentsCost').get(function () {
  return this.shipments.reduce(
    (total, shipment) => total + shipment.carriage_price,
    0,
  );
});
carrierSchema.virtual('transactions', {
  ref: 'Transaction',
  localField: '_id',
  foreignField: 'carrier_id',
  justOne: false,
  populate: true,
});

carrierSchema.virtual('transactionsCount', {
  ref: 'Transaction',
  localField: '_id',
  foreignField: 'carrier_id',
  count: true,
});

carrierSchema.virtual('totalTransactionAmount').get(function () {
  return this.transactions.reduce(
    (total, transaction) => total + transaction.amount,
    0,
  );
});

carrierSchema.virtual('balance').get(function () {
  return this.totalShipmentsCost - this.totalTransactionAmount;
});
