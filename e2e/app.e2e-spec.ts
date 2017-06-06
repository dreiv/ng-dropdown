import { NgDropdownPage } from './app.po';

describe('ng-dropdown App', () => {
  let page: NgDropdownPage;

  beforeEach(() => {
    page = new NgDropdownPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
