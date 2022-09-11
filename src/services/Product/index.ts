import ProductService from './service';

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function findAll(): Promise < any[] > {
    return await ProductService.findAll();
}

export async function save(data: any): Promise < any[] > {
    return await ProductService.save(data);
}

export async function update(id: number, data: any): Promise < any[] > {
    return await ProductService.update(id, data);
}

export async function remove(id: number): Promise < any[] > {
    return await ProductService.remove(id);
}