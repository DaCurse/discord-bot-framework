import { EVENT_LISTENER_METADATA as metadataConstants } from '../constants';
import { EventListenerMetadata } from '../interfaces/event-listener-metdata.interface';
import { createMetadataDecorator } from './metadata.decorator';

const metadataKeys = [metadataConstants.EVENT_TYPE];

export const EventListener = createMetadataDecorator<EventListenerMetadata>(
  metadataKeys
);
