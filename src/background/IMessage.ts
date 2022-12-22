export type MessageType = 'refresh' | 'show-app';

export interface IMessage {
  type: MessageType;
  data: any;
}
