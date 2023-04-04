import mongoose, { Schema } from 'mongoose';
import { ICarrier } from './carrier.interface';
import Shipment from '../../shipment/entities/shipment.schema';
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
  ref: Shipment.name,
  localField: '_id',
  foreignField: 'carrier',
  justOne: false,
  populate: true,
});

carrierSchema.virtual('shipmentsCount', {
  ref: 'Shipment',
  localField: '_id',
  foreignField: 'carrier',
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
  foreignField: 'carrier',
  justOne: false,
  populate: true,
});

carrierSchema.virtual('transactionsCount', {
  ref: 'Transaction',
  localField: '_id',
  foreignField: 'carrier',
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
