import React from 'react';
// import { VictoryPie } from 'victory';
// import chartist from 'chartist';
import { Button, Link } from '@components/ui';

export default function Home() {
  /* Initialize the chart with the above settings */
  return (
    <div className="flex justify-center items-center flex-col space-y-4 h-screen">
      <Link href="/recharts">
        <Button>recharts</Button>
      </Link>
      <Link href="/window">
        <Button>Window Test</Button>
      </Link>
    </div>
  );
}
