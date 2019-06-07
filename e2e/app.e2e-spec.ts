import { LandingappPage } from './app.po';

describe('landingapp App', () => {
  let page: LandingappPage;

  beforeEach(() => {
    page = new LandingappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
