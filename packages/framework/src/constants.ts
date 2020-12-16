export const BASE_METADATA = {
  NAME: 'name',
  ENABLED: 'enabled',
};

export const MODULE_METADATA = {
  ...BASE_METADATA,
  COMMANDS: 'commands',
  LISTENERS: 'listeners',
};

export const EVENT_LISTENER_METADATA = {
  ...BASE_METADATA,
  EVENT_TYPE: 'eventType',
};
