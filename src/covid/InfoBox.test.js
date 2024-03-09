import { render, screen } from '@testing-library/react';
import InfoBox from './InfoBox';

it("infobox", () => {
    const {queryByTitle} = render(<InfoBox/>);
    const infobox = queryByTitle("infobox");
    expect(infobox).toBeTruthy();
  })

  it("infobox-card", () => {
    const {queryByTitle} = render(<InfoBox/>);
    const infoBox__card = queryByTitle("infobox-card");
    expect(infoBox__card).toBeTruthy();
  })

  it("info-title", () => {
    const {queryByTitle} = render(<InfoBox/>);
    const infoBox__title = queryByTitle("infobox-title");
    expect(infoBox__title).toBeTruthy();
  })
  
  it("info-total", () => {
    const {queryByTitle} = render(<InfoBox/>);
    const infobox__total = queryByTitle("infobox-total");
    expect(infobox__total).toBeTruthy();
  })