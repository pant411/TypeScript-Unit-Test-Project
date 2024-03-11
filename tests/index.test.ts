// src/myFunction.test.ts

import {  merge } from "../src";


describe('add function', () => {
  it('collection_1, collection_2, and collection_3 correct.', () => {
    expect( merge([1,2,3], [5,4], [6,7,8])).toStrictEqual([1,2,3,5,4,6,7,8]);
  });

  it(`collection_1 doesn't correct.`, () => {
    expect( merge([1,3,2], [5, 4], [6,7,8])).toStrictEqual([]);
  });  

  it(`collection_2 doesn't correct.`, () => {
    expect( merge([1,2,3], [4, 5], [6,7,8])).toStrictEqual([]);
  });

  it(`collection_3 doesn't correct.`, () => {
    expect( merge([1,2,3], [5, 4], [8,6,7])).toStrictEqual([]);
  });
});
