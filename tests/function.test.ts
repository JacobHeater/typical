import { tsst, the } from 'tsst';
import { Fn } from './function';

describe(`function`, () => {

  describe(`Fn`, () => {

    it(`the<(v: number) => string, Fn<[number], string>>()`, () => {
      tsst(() => {
        the<(v: number) => string, Fn<[number], string>>();
      }).expectToCompile();
    });

  });

});
