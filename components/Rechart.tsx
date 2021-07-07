import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ReferenceArea,
} from 'recharts';

import sampleData from 'data2.json';

interface Props {
  xAxis: boolean;
  yAxis: boolean;
  referenceArea: boolean;
  tooltip: boolean;
  referenceLine: boolean;
  cartesianGrid: boolean;
  legend: boolean;
  line: boolean;
}
export default function RechartComponent({
  xAxis,
  yAxis,
  referenceLine,
  referenceArea,
  tooltip,
  cartesianGrid,
  legend,
  line,
}: Props) {
  return (
    <>
      <LineChart
        width={900}
        height={700}
        data={sampleData}
        margin={{ top: 100, right: 30, left: 20, bottom: 5 }}
      >
        {xAxis && <XAxis dataKey="Step" />}
        {yAxis && <YAxis />}
        {cartesianGrid && <CartesianGrid strokeDasharray="3 3" />}
        {referenceLine && <ReferenceLine y={1} label="Max" stroke="red" strokeDasharray="3 3" />}
        {referenceLine && <ReferenceLine x="4" stroke="green" label="sector" />}
        {referenceLine && (
          <ReferenceLine
            label="Segment"
            stroke="green"
            strokeDasharray="3 3"
            segment={[
              { x: '0', y: 0 },
              { x: '4', y: 1 },
            ]}
          />
        )}
        {tooltip && <Tooltip />}
        {legend && <Legend verticalAlign="bottom" />}
        {referenceArea && (
          <ReferenceArea x1={5} x2={6} y1={0.5} y2={0.73} stroke="red" strokeOpacity={0.3} />
        )}
        {line &&
          Object.entries(sampleData[0])
            .slice(1)
            .map((sample, idx) => (
              <Line
                id={sample[0]}
                name={sample[0]}
                type="monotone"
                dataKey={sample[0]}
                stroke="#8884d8"
                key={`${sample[0]}-${idx + 1}`}
              />
            ))}
      </LineChart>
    </>
  );
}
