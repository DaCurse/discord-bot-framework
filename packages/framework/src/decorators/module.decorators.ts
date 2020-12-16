import { MODULE_METADATA as metadataConstants } from '../constants';
import { ModuleMetadata } from '../interfaces/metadata/module-metadata.interface';
import { createMetadataDecorator } from './metadata.decorator';

const metadataKeys = Object.values(metadataConstants);

export const Module = createMetadataDecorator<ModuleMetadata>(metadataKeys);
