export function filterProps<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const ret: Partial<T> = {};
  keys.forEach((key) => {
    if (obj && Object.prototype.hasOwnProperty.call(obj, key)) {
      ret[key] = obj[key];
    }
  });
  return ret as Pick<T, K>;
}
