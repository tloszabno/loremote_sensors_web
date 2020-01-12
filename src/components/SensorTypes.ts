export interface Measurement {
  sensor_name: string;
  measurement_name: string;
  unit: string;
  value: number;
  timestamp: Date;
  error: string;
}

export interface MeasurementsSet {
  measurements: Measurement[];
  timestamp: Date;
  id: string;
}
