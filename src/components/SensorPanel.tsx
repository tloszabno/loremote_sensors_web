import React from "react";
import { SensorValue } from "./SensorTypes";

interface Props {
  name: string;
  values: SensorValue[];
}

export const SensorPanel: React.FC<Props> = ({ name, values }) => {
  return (
    <div>
      <h1>{name}</h1>
      {values.map(value => toRow(name, value))}
    </div>
  );
};

const toRow = (name: string, value: SensorValue): JSX.Element => (
  <div key={`${name}-${value.sensor_name}-row`}>
    <span>{value.sensor_name}:</span>
    <span style={{ marginLeft: "30px" }}>
      {value.value} {value.unit}
    </span>
  </div>
);
