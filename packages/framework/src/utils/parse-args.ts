import { ARGS_PATTERN } from '../constants';

export function parseArgs<T extends object>(
  argsClass: new () => T,
  args: string
): T {
  const pattern = Reflect.getMetadata(ARGS_PATTERN, argsClass);
  const matches = args.match(pattern);
  if (!matches) {
    throw new Error("Args don't match pattern");
  }

  // Get just capture groups from matches
  const groups = matches.slice(1);
  const instance = new argsClass();
  const properties = Reflect.getMetadataKeys(instance);

  for (const property of properties) {
    const { serializer, matchIndex } = Reflect.getMetadata(property, instance);
    const value = serializer(groups[matchIndex]);
    Object.defineProperty(instance, property, { value, enumerable: true });
  }

  return instance;
}
