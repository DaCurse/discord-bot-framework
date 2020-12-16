import { BaseMetadata } from './base-metadata.interface';

export interface EventListenerMetadata extends BaseMetadata {
  eventType: string | string[];
}
