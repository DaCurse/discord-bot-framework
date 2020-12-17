import { MODULE_METADATA as metadataConstants } from '../constants';
import { ModuleMetadata } from '../interfaces';
import { createMetadataDecorator } from './metadata.decorator';

const metadataKeys = Object.values(metadataConstants);

export const Module = createMetadataDecorator<ModuleMetadata>(metadataKeys);
