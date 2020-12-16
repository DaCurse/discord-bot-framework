import { ARGS_PATTERN } from '../constants';

export function Args(pattern: RegExp): ClassDecorator {
  return Reflect.metadata(ARGS_PATTERN, pattern);
}
