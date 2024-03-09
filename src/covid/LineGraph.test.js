import { render, screen } from '@testing-library/react';
import LineGraph from './LineGraph';

it("line-graph", () => {
    const {queryByTitle} = render(<LineGraph/>);
    const line__graph = queryByTitle("line-graph");
    expect(line__graph).toBeTruthy();
  })