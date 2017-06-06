import { Component, Logger, Shared } from '@nestjs/common';
import { Core, Model } from 'iridium';
import { InstanceImplementation } from 'iridium/dist/lib/InstanceInterface';
import { SETTINGS } from './../../../environments/environment';

const logger = new Logger('DatabaseService');

@Component()
export class DatabaseService extends Core {

    private isConnected = false;

    constructor() {
        super(SETTINGS.database);
    }

    public async repository<TDocument, TInstance>(instanceType: InstanceImplementation<TDocument, TInstance>) {
        if (!this.isConnected) {
            await this.connect();
        }
        const model = new Model(this, instanceType);
        model.ensureIndexes();
        return model;
    }

    protected onConnecting(connection) {
        this.isConnected = true;
        return Promise.resolve(connection);
    }

    protected onConnected() {
        console.log(`Connected to DB: ${SETTINGS.database.database}`);
        this.isConnected = true;
        return Promise.resolve();
    }

}
