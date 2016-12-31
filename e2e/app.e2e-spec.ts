import { Ng2NewsPage } from './app.po';

describe('ng2-news App', function() {
  let page: Ng2NewsPage;

  beforeEach(() => {
    page = new Ng2NewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
