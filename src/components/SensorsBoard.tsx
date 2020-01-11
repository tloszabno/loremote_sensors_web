import React, { useEffect, useState } from "react";
import { MeasurementsSet, SensorValue } from "./SensorTypes";
import { SensorPanel } from "./SensorPanel";

export const SensorsBoard: React.FC = () => {
  const [data, setData] = useState<{ [id: string]: SensorValue[] }>({});
  useEffect(() => {
    fetch("/api/measurements/1")
      .then(res => res.json())
      .then(data => groupByMeasurementName(data.data[0]))
      .then(data => setData(data));
  }, []);
  return (
    <div>
      {Object.keys(data).map(key => (
        <SensorPanel key={`${key}-sensor-panel`} name={key} values={data[key]} />
      ))}
    </div>
  );
};

const groupByMeasurementName = (
  measurementSet: MeasurementsSet
): { [id: string]: SensorValue[] } => {
  const by_name: { [id: string]: SensorValue[] } = {};

  measurementSet.measurements.forEach(measurement => {
    const measurement_name = measurement.measurement_name;
    if (!(measurement_name in by_name)) {
      by_name[measurement_name] = [];
    }

    by_name[measurement_name].push(measurement);
  });

  return by_name;
};
