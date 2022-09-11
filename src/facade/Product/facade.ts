import { ProductService } from "../../services";
import { IProductFacade } from "./interface";


/**
 * @export
 * @implements {IProductModelService}
 */
const ProductFacade: IProductFacade = {
    /**
     * @returns {Promise < any[] >}
     * @memberof ProductFacade
     */
    async findAll(): Promise<any[]> {

        let Product = await ProductService.findAll();
        return Product;
    },

    async save(data:any): Promise<any[]> {
        let Product = await ProductService.save(data);
        return Product;
    },

    async update(id: number, data:any): Promise<any[]> {
        let Product = await ProductService.update(id, data);
        return Product;
    },

    async remove(id: number): Promise<any[]> {
        let Product = await ProductService.remove(id);
        return Product;
    }
}

export default ProductFacade;