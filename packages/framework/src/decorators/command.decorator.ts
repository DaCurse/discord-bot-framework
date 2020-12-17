import { COMMAND_METADTA as metadataConstants } from '../constants';
import { CommandMetadata } from '../interfaces';
import { createMetadataDecorator } from './metadata.decorator';

const metadataKeys = Object.values(metadataConstants);

export const Command = createMetadataDecorator<CommandMetadata>(metadataKeys);
