
export interface Partition {
  id: string;
  enabled: boolean;
  name: string;
  beginAddress: string;
  endAddress: string;
  region: string;
  location: string;
}

export enum TabType {
  WELCOME = 'Welcome',
  FORMAT = 'Format',
  DOWNLOAD = 'Download',
  READBACK = 'Readback',
  MEMORY_TEST = 'Memory Test'
}
