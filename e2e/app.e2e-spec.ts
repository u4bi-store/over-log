import { OverLogPage } from './app.po';

describe('over-log App', function() {
  let page: OverLogPage;

  beforeEach(() => {
    page = new OverLogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
