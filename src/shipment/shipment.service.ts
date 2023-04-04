import { Injectable } from '@nestjs/common';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { UpdateShipmentDto } from './dto/update-shipment.dto';
import { IShipment } from './entities/shipment.interface';
import mongoose, { Model, model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ShipmentService {
  constructor(
    @InjectModel('Shipment') private readonly shipmentModel: Model<IShipment>,
  ) {}

  async create(createShipmentDto: CreateShipmentDto): Promise<IShipment> {
    const shipment = new this.shipmentModel({
      date: createShipmentDto.date,
      supplier: createShipmentDto.supplier,
      customer: createShipmentDto.customer,
      material: createShipmentDto.material,
      carriage_price: createShipmentDto.carriage_price,
      material_price: createShipmentDto.material_price,
      vehicle_number: createShipmentDto.vehicle_number,
      cart_number: createShipmentDto.cart_number,
      vehicle_volume: createShipmentDto.vehicle_volume,
      driver_name: createShipmentDto.driver_name,
      carrier: new mongoose.Types.ObjectId(createShipmentDto.carrier), // convert carrier value to ObjectId
    });
    await shipment.save();

    return shipment;
  }
  // async create(createShipmentDto: CreateShipmentDto): Promise<IShipment> {
  //   const createdShipment = new this.shipmentModel(createShipmentDto);
  //   await createdShipment.save();
  //   return createdShipment;
  // }

  findAll() {
    return `This action returns all shipment`;
  }

  async findOne(id: string): Promise<IShipment> {
    return await this.shipmentModel.findById(id).populate('carrier').exec();
  }

  update(id: number, updateShipmentDto: UpdateShipmentDto) {
    return `This action updates a #${id} shipment`;
  }

  remove(id: number) {
    return `This action removes a #${id} shipment`;
  }
}
