process.env.NODE_ENV = 'test'

import { expect } from "chai";
import { ProductService } from "../../src/services";
import { db } from '../../src/config/connection/database';
import Product from "../../src/models/Product.model";

describe('ProductService Test', () => {

  before('Init', async() => {
    await db.sync({ force: true});
    Product.create({
      id: 1,
      name: 'test',
      description: 'description',
      qty: 10,
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01'
    });
    Product.create({
      id: 2,
      name: 'test2',
      description: 'description',
      qty: 15,
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01'
    });
  });

  describe('FindAll', async() => {
    it('should return one user', async () => {
      const Product: any[] = await ProductService.findAll();
      expect(2).equal(Product.length);
    });
  });

});