import {Table, Column, Model, HasMany, PrimaryKey} from 'sequelize-typescript';

export interface IProducts {
    id: number
    name: string
}

@Table({
    tableName: "Products"
})
export default class Products extends Model implements IProducts {

    @PrimaryKey
    @Column
    id!: number

    @Column
    name!: string

    @Column
    description!: string

    @Column
    qty!: number
}