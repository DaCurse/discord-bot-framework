import { CommandContext } from './interfaces/command-context.interface';

export abstract class BaseCommand<T> {
  abstract run(argsDto: T, ctx: CommandContext): void;
}
