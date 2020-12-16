import { Message, User } from 'discord.js';

export interface CommandContext {
  commandName: string;
  rawCommand: string;
  alias?: string;
  sender: User;
  message: Message;
}
