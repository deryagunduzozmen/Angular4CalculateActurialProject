import { ActurialCalculationProjectPage } from './app.po';

describe('acturial-calculation-project App', () => {
  let page: ActurialCalculationProjectPage;

  beforeEach(() => {
    page = new ActurialCalculationProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
