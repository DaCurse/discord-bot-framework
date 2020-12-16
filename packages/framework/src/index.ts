import 'reflect-metadata';
import { BaseCommand } from './base-command';
import { IntArg, StringArg } from './decorators/arg.decorator';
import { Args } from './decorators/args.decorator';
import { Command } from './decorators/command.decorator';
import { EventListener } from './decorators/event-listener.decorator';
import { Module } from './decorators/module.decorators';
import { CommandContext } from './interfaces/command-context.interface';
import { parseArgs } from './utils/parse-args';

@EventListener({
  name: 'test-listener',
  eventType: ['message'],
})
class TestListener {}

@Command({
  name: 'test',
  aliases: ['pog'],
})
class TestCommand extends BaseCommand<number | object> {
  run(args: number | object, ctx: CommandContext): void {
    if (typeof args === 'number') {
      console.log(ctx.commandName + args);
    } else {
      console.log(args.toString());
    }
  }
}

@Module({
  name: 'test',
  listeners: [TestListener],
  commands: [TestCommand],
})
class TestModule {}

const listeners = Reflect.getMetadata('listeners', TestModule);
console.log(listeners);
const listenerMetadata = Reflect.getMetadata('eventType', listeners[0]);
console.log(listenerMetadata);

const commands = Reflect.getMetadata('commands', TestModule);
console.log(commands);

const instance = new commands[0]();
const mockCtx: CommandContext = {
  commandName: 'test',
  rawCommand: 'test',
  sender: null,
  message: null,
};
instance.run(4, mockCtx);
instance.run([1, 2, 3], mockCtx);

console.log(Reflect.getMetadata('aliases', commands[0]));

@Args(/^(add|sub|mul|div) (\d+) (\d+)$/)
class TestArgs {
  @StringArg(0)
  operation: string;
  @IntArg(1)
  n1: number;
  @IntArg(2)
  n2: number;
}

const args = parseArgs<TestArgs>(TestArgs, 'add 1 2');
console.log(args);
