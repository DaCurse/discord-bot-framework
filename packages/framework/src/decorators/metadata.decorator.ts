import { BaseMetadata } from '../interfaces';
import { validateMetadataKeys } from '../utils/validate-metadata-keys';

function applyMetadata<T extends BaseMetadata>(metadata: T, target: object) {
  for (const property in metadata) {
    if (metadata.hasOwnProperty(property)) {
      Reflect.defineMetadata(property, metadata[property], target);
    }
  }
}

export function createMetadataDecorator<T extends BaseMetadata>(
  metadataKeys: string[]
) {
  return (metadata: T): ClassDecorator => {
    const keys = Object.keys(metadata);
    validateMetadataKeys(metadataKeys, keys);

    return applyMetadata.bind(null, metadata);
  };
}
