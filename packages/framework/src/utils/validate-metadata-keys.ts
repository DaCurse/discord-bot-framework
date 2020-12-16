import { BASE_METADATA as baseMetadataConstants } from '../constants';

const baseMetadataKeys = Object.values(baseMetadataConstants);

export function validateMetadataKeys(
  metadataKeys: string[],
  keysToValidate: string[]
) {
  metadataKeys = [...baseMetadataKeys, ...metadataKeys];
  const validateKey = (key: string) => {
    if (metadataKeys.includes(key)) {
      return;
    }
    throw new Error(`Invalid metadata key ${key}`);
  };
  keysToValidate.forEach(validateKey);
}
