import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import dynamic from 'next/dynamic';

export default function RechartPage() {
  const [yAxis, setYAxis] = useState(true);
  const [line, setLine] = useState(true);
  const [xAxis, setXAxis] = useState(true);
  const [refrenceArea, setRefrenceArea] = useState(true);
  const [refrenceLine, setRefrenceLine] = useState(true);
  const [cartesianGrid, setCartesianGrid] = useState(true);
  const [legend, setLegend] = useState(true);
  const [tooltip, setTooltip] = useState(false);

  const RechartComponent = dynamic(() => import('@components/Rechart'), { ssr: false });

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex">
        <FormControlLabel
          control={
            <Checkbox
              checked={xAxis}
              onChange={() => setXAxis((prev) => !prev)}
              name="checkedB"
              color="primary"
            />
          }
          label="xAxis"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={yAxis}
              onChange={() => setYAxis((prev) => !prev)}
              name="checkedB"
              color="primary"
            />
          }
          label="yAxis"
        />
      </div>
      <div>
        <FormControlLabel
          control={
            <Checkbox
              checked={refrenceLine}
              onChange={() => setRefrenceLine((prev) => !prev)}
              name="checkedB"
              color="primary"
            />
          }
          label="RefrenceLine"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={refrenceArea}
              onChange={() => setRefrenceArea((prev) => !prev)}
              name="checkedB"
              color="primary"
            />
          }
          label="RefrenceArea"
        />
      </div>
      <div>
        <FormControlLabel
          control={
            <Checkbox
              checked={tooltip}
              onChange={() => setTooltip((prev) => !prev)}
              name="checkedB"
              color="primary"
            />
          }
          label="Tooltip"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={legend}
              onChange={() => setLegend((prev) => !prev)}
              name="checkedB"
              color="primary"
            />
          }
          label="Legend"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={cartesianGrid}
              onChange={() => setCartesianGrid((prev) => !prev)}
              name="checkedB"
              color="primary"
            />
          }
          label="CartesianGrid"
        />
      </div>
      <div>
        <FormControlLabel
          control={
            <Checkbox
              checked={line}
              onChange={() => setLine((prev) => !prev)}
              name="checkedB"
              color="primary"
            />
          }
          label="Line"
        />
      </div>
      <div>
        <RechartComponent
          line={line}
          cartesianGrid={cartesianGrid}
          legend={legend}
          referenceArea={refrenceArea}
          referenceLine={refrenceLine}
          tooltip={tooltip}
          yAxis={yAxis}
          xAxis={xAxis}
        />
      </div>
    </div>
  );
}
