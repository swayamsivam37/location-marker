import {faker} from "@faker-js/faker"
import { MarkOnMap } from "./CustomMap";

// export default 'red';

export class User implements MarkOnMap {
    name : string;
    location: {
        lat: number;
        lng: number;
    };
    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng : parseFloat(faker.address.longitude())
        }
    }

    getContent(): string {
        return `UserName : ${this.name}`
    }
}