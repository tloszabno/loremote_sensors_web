import React from "react";
import { Measurement } from "./SensorTypes";
import { Card, CardHeader, CardBody, Table } from "reactstrap";
import { SensorBadgeDiv, NameSpan } from "./SensorBadge.styled";

interface Props {
  name: string;
  values: Measurement[];
}

export const SensorBadge: React.FC<Props> = ({ name, values }) => {
  return (
    <SensorBadgeDiv>
      <Card>
        <CardHeader>
          <NameSpan>{name}</NameSpan>
        </CardHeader>
        <CardBody>
          <Table responsive borderless>
            <tbody>{values.map(value => toRow(name, value))}</tbody>
          </Table>
        </CardBody>
      </Card>
    </SensorBadgeDiv>
  );
};

const toRow = (name: string, value: Measurement): JSX.Element => (
  <tr key={`${name}-${value.measurement_name}-row`}>
    <td>
      <NameSpan>{value.measurement_name}</NameSpan>
    </td>
    <td>
      {value.value} {value.unit}
    </td>
  </tr>
);
