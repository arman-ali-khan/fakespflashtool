
import { Partition } from './types';

export const INITIAL_PARTITIONS: Partition[] = [
  { id: '1', enabled: true, name: 'preloader', beginAddress: '0x0000000000000000', endAddress: '0x000000000003ffff', region: 'EMMC_BOOT1_BOOT2', location: 'C:\\Users\\Firmware\\preloader.bin' },
  { id: '2', enabled: true, name: 'recovery', beginAddress: '0x0000000000108000', endAddress: '0x0000000002107fff', region: 'EMMC_USER', location: 'C:\\Users\\Firmware\\recovery.img' },
  { id: '3', enabled: false, name: 'md1img', beginAddress: '0x0000000010500000', endAddress: '0x0000000014000000', region: 'EMMC_USER', location: '' },
  { id: '4', enabled: true, name: 'spmfw', beginAddress: '0x0000000016900000', endAddress: '0x0000000018000000', region: 'EMMC_USER', location: 'C:\\Users\\Firmware\\spmfw.img' },
  { id: '5', enabled: false, name: 'scp1', beginAddress: '0x0000000016a00000', endAddress: '0x0000000017000000', region: 'EMMC_USER', location: '' },
  { id: '6', enabled: true, name: 'scp2', beginAddress: '0x0000000016b00000', endAddress: '0x0000000018000000', region: 'EMMC_USER', location: 'C:\\Users\\Firmware\\scp2.img' },
  { id: '7', enabled: false, name: 'sspm_1', beginAddress: '0x0000000018500000', endAddress: '0x0000000019000000', region: 'EMMC_USER', location: '' },
  { id: '8', enabled: true, name: 'logo', beginAddress: '0x000000001a500000', endAddress: '0x000000001b000000', region: 'EMMC_USER', location: 'C:\\Users\\Firmware\\logo.bin' },
  { id: '9', enabled: true, name: 'boot', beginAddress: '0x000000001c500000', endAddress: '0x000000001e000000', region: 'EMMC_USER', location: 'C:\\Users\\Firmware\\boot.img' },
];
