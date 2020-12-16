import { BaseMetadata } from './base-metadata.interface';

export interface CommandMetadata extends BaseMetadata {
  aliases: string[];
  permissions?: string[];
}
