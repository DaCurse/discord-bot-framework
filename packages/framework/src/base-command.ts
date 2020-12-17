import { CommandContext } from './interfaces';

export abstract class BaseCommand<T> {
  abstract run(argsDto: T, ctx: CommandContext): void;
}
