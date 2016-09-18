import { TourOfHeroesV2Page } from './app.po';

describe('tour-of-heroes-v2 App', function() {
  let page: TourOfHeroesV2Page;

  beforeEach(() => {
    page = new TourOfHeroesV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
