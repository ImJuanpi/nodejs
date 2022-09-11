import * as dotenv from 'dotenv';
import { Dialect } from 'sequelize/types';

dotenv.config();

interface IConfig {
    port: string | number;
    database: {
        DB_DIALECT: Dialect,
        DB_NAME?: string;
        DB_USER?: string;
        DB_PASSWORD?: string;
        DB_PORT?: string;
        DB_HOST?: string;
        DB_STORAGE?: string;
    };
    kafka: {
        CLIENT_ID: string;
        GROUP_ID: string;
        BROKER: string;
    };
    secret: string;
}

const NODE_ENV: string = process.env.NODE_ENV || 'development';

const development: IConfig = {
    port: process.env.PORT || 3001,
    database: {
        DB_DIALECT: 'mysql',
        DB_NAME: process.env.DB_NAME || 'curso_nodejs',
        DB_USER: process.env.DB_USER || 'root',
        DB_PASSWORD: process.env.DB_PASSWORD || 'root',
        DB_PORT: process.env.DB_PORT || '3306',
        DB_HOST: process.env.DB_HOST || 'localhost'
    },
    kafka: {
        CLIENT_ID: process.env.CLIENT_ID || 'test-app',
        GROUP_ID: process.env.GROUP_ID || 'test-app',
        BROKER: process.env.BROKER || 'localhost:9092'
    },

    secret: process.env.SECRET || '@QEGTUI'
};

const production: IConfig = {
    port: process.env.PORT || 3001,
    database: {
        DB_DIALECT: 'mysql',
        DB_NAME: process.env.DB_NAME || 'curso_nodejs',
        DB_USER: process.env.DB_USER || 'root',
        DB_PASSWORD: process.env.DB_PASSWORD || 'root',
        DB_PORT: process.env.DB_PORT || '3306',
        DB_HOST: process.env.DB_HOST || 'localhost'
    },
    kafka: {
        CLIENT_ID: process.env.CLIENT_ID || 'test-app',
        GROUP_ID: process.env.GROUP_ID || 'test-app',
        BROKER: process.env.BROKER || 'localhost:9092'
    },
    secret: process.env.SECRET || '@QEGTUI'
};

const test: IConfig = {
    port: process.env.PORT || 3001,
    database: {
        DB_DIALECT: 'sqlite',
        DB_STORAGE: process.env.DB_STORAGE || ':memory:'
    },
    kafka: {
        CLIENT_ID: process.env.CLIENT_ID || 'test-app',
        GROUP_ID: process.env.GROUP_ID || 'test-app',
        BROKER: process.env.BROKER || 'localhost:9092'
    },
    secret: process.env.SECRET || '@QEGTUI'
};

const config: {
    [name: string]: IConfig
} = {
    test,
    development,
    production
};

export default config[NODE_ENV];
