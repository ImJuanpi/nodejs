import ProductFacade from './facade';
import { NextFunction, Request, Response } from 'express';
import HttpStatusCode from '../../commons/constants/HttpStatusCode';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const Product: any[] = await ProductFacade.findAll();
        res.status(HttpStatusCode.OK).json(Product);
    } catch (error) {
        next(error);
    }
}

export async function save(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const response = await ProductFacade.save(req.body);
        res.status(HttpStatusCode.OK).json(response);
    } catch (error) {
        next(error);
    }
}

export async function update(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const response = await ProductFacade.update(Number(req.params.id), req.body);
        res.status(HttpStatusCode.OK).json(response);
    } catch (error) {
        next(error);
    }
}

export async function remove(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const response = await ProductFacade.remove(Number(req.params.id));
        res.status(HttpStatusCode.OK).json(response);
    } catch (error) {
        next(error);
    }
}