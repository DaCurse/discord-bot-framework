import 'reflect-metadata';
import { EventListener } from './decorators/event-listener.decorator';
import { Module } from './decorators/module.decorators';

@EventListener({
  name: 'test-listener',
  eventType: ['message'],
})
class TestListener {}

@Module({
  name: 'test',
  listeners: [TestListener],
})
class TestModule {}

const metadata = Reflect.getMetadata('listeners', TestModule);
console.log(metadata);
const listenerMetadata = Reflect.getMetadata('eventType', metadata[0]);
console.log(listenerMetadata);
