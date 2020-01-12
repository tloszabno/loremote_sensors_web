import React, { useEffect, useState } from "react";
import { MeasurementsSet, Measurement } from "./SensorTypes";
import { SensorBadge } from "./SensorBadge";
import { SensorsBoardDiv } from "./SensorsBoard.styled";

export const SensorsBoard: React.FC = () => {
  const [data, setData] = useState<{ [id: string]: Measurement[] }>({});
  useEffect(() => {
    fetch("/api/measurements/1")
      .then(res => res.json())
      .then(data => groupBySensorName(data.data[0]))
      .then(data => setData(data));
  }, []);
  return (
    <SensorsBoardDiv>
      {Object.keys(data).map(key => (
        <SensorBadge key={`${key}-sensor-panel`} name={key} values={data[key]} />
      ))}
    </SensorsBoardDiv>
  );
};

const groupBySensorName = (
  measurementSet: MeasurementsSet
): { [id: string]: Measurement[] } => {
  const by_name: { [id: string]: Measurement[] } = {};

  measurementSet.measurements.forEach(measurement => {
    const sensor_name = measurement.sensor_name;
    if (!(sensor_name in by_name)) {
      by_name[sensor_name] = [];
    }

    by_name[sensor_name].push(measurement);
  });

  return by_name;
};
