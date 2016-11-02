import { MyScotch1Page } from './app.po';

describe('my-scotch1 App', function() {
  let page: MyScotch1Page;

  beforeEach(() => {
    page = new MyScotch1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
