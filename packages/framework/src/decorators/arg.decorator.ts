type ArgSerializer<T> = (raw: string) => T;

export function createArgDecorator<T>(serializer: ArgSerializer<T>) {
  return (matchIndex: number): PropertyDecorator => (
    target: object,
    propertyKey: string
  ) => Reflect.defineMetadata(propertyKey, { serializer, matchIndex }, target);
}

export const StringArg = createArgDecorator<string>((raw: string) => raw);
export const IntArg = createArgDecorator<number>((raw: string) =>
  parseInt(raw, 10)
);
