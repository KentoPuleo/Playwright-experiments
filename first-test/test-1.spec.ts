import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=google&oq=google&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDE3NjdqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.getByRole('button', { name: 'Alle akzeptieren' }).click();
  await page.getByRole('link', { name: 'Google Google https://www.google.ch ›' }).click();
  await page.getByRole('button', { name: 'Alle akzeptieren' }).click();
  await page.getByLabel('Suche', { exact: true }).click();
  await page.getByLabel('Suche', { exact: true }).fill('Hallo');
  await page.goto('https://www.google.ch/search?q=Hallo&sca_esv=b8f7a68888e6939d&hl=de&source=hp&ei=gPwYZ-uhKr_97_UP7YCZqAY&iflsig=AL9hbdgAAAAAZxkKkG8ovrlyPglPo644kSrWQtJEmAQv&ved=0ahUKEwjr4YqX0KSJAxW__rsIHW1ABmUQ4dUDCA8&uact=5&oq=Hallo&gs_lp=Egdnd3Mtd2l6IgVIYWxsbzILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATIIEAAYgAQYsQMyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATIIEC4YgAQYsQMyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATILEAAYgAQYsQMYgwFIshlQ4wZYmQ1wAXgAkAEAmAFHoAHBAqoBATW4AQPIAQD4AQGYAgagAuUCqAIKwgIQEAAYAxjlAhjqAhiMAxiPAcICEBAuGAMY5QIY6gIYjAMYjwHCAg4QABiABBixAxiDARiKBcICERAuGIAEGLEDGNEDGIMBGMcBwgIOEC4YgAQYsQMY0QMYxwHCAg4QLhiABBjHARiOBRivAcICDhAuGIAEGLEDGIMBGIoFwgIFEC4YgATCAgUQABiABMICERAuGIAEGLEDGIMBGMcBGK8BwgILEC4YgAQYxwEYrwGYAweSBwE2oAfMPA&sclient=gws-wiz');
  await page.locator('span').filter({ hasText: /^hallo$/ }).click();
});