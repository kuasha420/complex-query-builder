import { escape } from 'querystring';

export type Primitives = string | number | boolean;

export type PrimitivesArray = (Primitives | QueryObject)[];

export interface QueryObject {
  [key: string]: Primitives | PrimitivesArray | QueryObject;
}

export const complexQueryBuilder = (obj: QueryObject | PrimitivesArray, parent?: string) => {
  let output_string: string[] = [];
  Object.keys(obj).forEach(function (val) {
    let key = val;
    // if you have any better idea, please open a PR.
    // @ts-ignore
    const current = obj[val];
    key = encodeURIComponent(String(key).replace(/[!'()*]/g, escape));
    if (parent) {
      key = parent + '[' + key + ']';
    }
    if (typeof current === 'object') {
      let query = complexQueryBuilder(current, key);
      output_string.push(query);
    } else {
      let value = encodeURIComponent(String(current).replace(/[!'()*]/g, escape));
      output_string.push(key + '=' + value);
    }
  });
  return output_string.join('&');
};

export default complexQueryBuilder;
