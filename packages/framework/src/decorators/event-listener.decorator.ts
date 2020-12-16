import { EVENT_LISTENER_METADATA as metadataConstants } from '../constants';
import { EventListenerMetadata } from '../interfaces/metadata/event-listener-metdata.interface';
import { createMetadataDecorator } from './metadata.decorator';

const metadataKeys = Object.values(metadataConstants);

export const EventListener = createMetadataDecorator<EventListenerMetadata>(
  metadataKeys
);
