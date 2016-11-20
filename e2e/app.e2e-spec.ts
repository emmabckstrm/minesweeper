import { MinesweeperAppPage } from './app.po';

describe('minesweeper-app App', function() {
  let page: MinesweeperAppPage;

  beforeEach(() => {
    page = new MinesweeperAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
