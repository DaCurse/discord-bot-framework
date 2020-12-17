import { BaseCommand } from '../../base-command';
import { BaseMetadata } from './base-metadata.interface';

type CommandConstructor = new (...args: any[]) => BaseCommand<any>;

export interface ModuleMetadata extends BaseMetadata {
  commands?: CommandConstructor[];
  listeners?: any[];
}
