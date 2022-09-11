import { IProductService } from "./interface";
import Product from "../../models/Product.model";
import HttpStatusCode from "../../commons/constants/HttpStatusCode";
import { ProductTo } from "../../to/ProductoTo";
import { NotFoundError } from "../../config/error";

/**
 * @export
 * @implements {IProductModelService}
 */
const ProductService: IProductService = {
    /**
     * @returns {Promise < any[] >}
     * @memberof ProductFacade
     */
    async findAll(): Promise<any[]> {
        return Product.findAll();
    },

    async save(data: any): Promise<any> {
        const response: any = {};
        await Product.create(data);
        response.status = HttpStatusCode.OK;
        response.message = 'Created product';

        return response;
    },

    async update(id: number, data: any): Promise<any> {
        const response: any = {};
        await Product.update(
            data, { where: { id: id }
        });
        response.status = HttpStatusCode.OK;
        response.message = 'Updated product';

        return response;
    },

    async remove(id: number): Promise<any> {
        const response: any = {};
        if(!(await Product.findByPk(id)))  throw new NotFoundError('Not found', HttpStatusCode.NOT_FOUND)
            await Product.destroy({ where: { id: id } });
        
        response.status = HttpStatusCode.OK;
        response.message = 'Deleted product';

        return response;
    }
}

export default ProductService;