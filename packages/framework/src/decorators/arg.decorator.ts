import { ArgMetadata, ArgSerializer } from '../interfaces';

export function createArgDecorator<T>(serializer: ArgSerializer<T>) {
  return (matchIndex: number): PropertyDecorator => (
    target: object,
    propertyKey: string
  ) =>
    Reflect.defineMetadata(
      propertyKey,
      { serializer, matchIndex } as ArgMetadata<T>,
      target
    );
}

export const Arg = createArgDecorator<string>((raw: string) => raw);
export const IntArg = createArgDecorator<number>((raw: string) =>
  parseInt(raw, 10)
);
