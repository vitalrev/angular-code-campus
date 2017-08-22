import { TccManagerAppPage } from './app.po';

describe('tcc-manager-app App', () => {
  let page: TccManagerAppPage;

  beforeEach(() => {
    page = new TccManagerAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
