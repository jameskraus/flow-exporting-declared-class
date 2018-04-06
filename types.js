// @flow
export type MyType = {
  id: number,
  name: string,
}

declare export class MyObject {
  constructor(): void;

  getStuff(param: number): MyType;
}
