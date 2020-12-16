import { MODULE_METADATA as metadataConstants } from '../constants';
import { ModuleMetadata } from '../interfaces/module-metadata.interface';
import { createMetadataDecorator } from './metadata.decorator';

const metadataKeys = [metadataConstants.COMMANDS, metadataConstants.LISTENERS];

export const Module = createMetadataDecorator<ModuleMetadata>(metadataKeys);
