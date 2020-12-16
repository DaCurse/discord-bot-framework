import { BASE_METADATA as baseMetadataConstants } from '../constants';

const baseMetadataKeys = [
  baseMetadataConstants.NAME,
  baseMetadataConstants.ENABLED,
];

export function validateMetadataKeys(
  metadataKeys: string[],
  keysToValidate: string[]
) {
  metadataKeys = [...baseMetadataKeys, ...metadataKeys];
  keysToValidate.forEach((key: string) => {
    if (metadataKeys.includes(key)) {
      return;
    }
    throw new Error();
  });
}
