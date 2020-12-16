import { BaseMetadata } from './base-metadata.interface';

export interface ModuleMetadata extends BaseMetadata {
  commands?: any[];
  listeners?: any[];
}
