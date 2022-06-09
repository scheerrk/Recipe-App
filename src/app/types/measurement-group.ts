import { Measurement } from "./measurement";

export interface MeasurementGroup {
    type: string;
    measurement: Measurement[];
}
