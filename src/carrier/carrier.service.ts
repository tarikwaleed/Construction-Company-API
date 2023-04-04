import { Injectable } from '@nestjs/common';
import { CreateCarrierDto } from './dto/create-carrier.dto';
import { UpdateCarrierDto } from './dto/update-carrier.dto';
import { CarrierRepository } from './carrier.repository';
import { ICarrier } from './entities/carrier.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CarrierService {
  constructor(
    @InjectModel('Carrier') private readonly carrierModel: Model<ICarrier>,
    @InjectModel('Shipment') private readonly shipmentModel: Model<ICarrier>,
  ) {}
  create() {
    return `This action returns all carrier`;
  }

  findAll() {
    return `This action returns all carrier`;
  }

  async findOne(id: string): Promise<ICarrier> {
    return await this.carrierModel.findById(id).populate('shipments')
  }
  update(id: number, updateCarrierDto: UpdateCarrierDto) {
    return `This action updates a #${id} carrier`;
  }

  remove(id: number) {
    return `This action removes a #${id} carrier`;
  }
}
