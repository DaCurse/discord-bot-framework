import { ARGS_PATTERN } from '../constants';

export function parseArgs<T extends object>(
  argsClass: new () => T,
  args: string
): T {
  const pattern = Reflect.getMetadata(ARGS_PATTERN, argsClass);
  // FIXME: Negative match index returns original string, need just array of
  // matches
  const matches = args.match(pattern);
  const instance = new argsClass();
  const properties = Reflect.getMetadataKeys(instance);

  for (const property of properties) {
    const { serializer, matchIndex } = Reflect.getMetadata(property, instance);
    const value = serializer(matches[matchIndex + 1]);
    Object.defineProperty(instance, property, { value, enumerable: true });
  }

  return instance;
}
