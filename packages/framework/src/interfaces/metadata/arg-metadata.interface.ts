export type ArgSerializer<T> = (raw: string) => T;

export interface ArgMetadata<T> {
  serializer: ArgSerializer<T>;
  matchIndex: number;
}
