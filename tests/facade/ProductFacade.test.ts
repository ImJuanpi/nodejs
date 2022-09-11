process.env.NODE_ENV = 'test'

import { expect } from "chai";
import ProductFacade from '../../src/facade/Product/facade';
import { db } from '../../src/config/connection/database';
import Product from "../../src/models/Product.model";

describe('ProductFacade Test', () => {

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
    });
  
    describe('FindAll', () => {
        it('should return one user', async () => {
            const Product: any[] = await ProductFacade.findAll();
            expect(1).equal(Product.length);
        });
    });

    describe('Create Product', () => {
        it('should return last product created', async () => {
            let data = {
                id: 2,
                name: "Producto 1",
                description: "Descripcion Uno",
                qty: 10,
                createdAt: '2020-01-01',
                updatedAt: '2020-01-01'
            }
            const Product: any = await ProductFacade.save(data);
            expect(200).equal(Product.status);
        });
    });

    describe('Update Product', () => {
        it('should product updated', async () => {
            let data = {
                description: "Descipcion Actualizada",
                qty: 25
            }
            const Product: any = await ProductFacade.update(1, data);
            expect(200).equal(Product.status);
        });
    });

    describe('Delete Product', () => {
        it('should deleted product', async () => {
            const Product: any = await ProductFacade.remove(1);
            expect(200).equal(Product.status);
        });
    });
    
});