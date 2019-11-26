import { GuidePage } from './app.po';

describe('guide App', function() {
  let page: GuidePage;

  beforeEach(() => {
    page = new GuidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
