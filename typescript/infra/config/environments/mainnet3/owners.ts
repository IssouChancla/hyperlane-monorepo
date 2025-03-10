import { ChainMap, OwnableConfig } from '@hyperlane-xyz/sdk';
import { Address, objMap } from '@hyperlane-xyz/utils';

export const timelocks: ChainMap<Address | undefined> = {
  arbitrum: '0xAC98b0cD1B64EA4fe133C6D2EDaf842cE5cF4b01',
};

export const safes: ChainMap<Address | undefined> = {
  celo: '0x1DE69322B55AC7E0999F8e7738a1428C8b130E4d',
  ethereum: '0x12C5AB61Fe17dF9c65739DBa73dF294708f78d23',
  avalanche: '0xDF9B28B76877f1b1B4B8a11526Eb7D8D7C49f4f3',
  polygon: '0x0D195469f76146F6ae3De8fc887e0f0DFBA691e7',
  bsc: '0xA0d3dcB9d61Fba32cc02Ad63983e101b29E2f28a',
  arbitrum: '0xbA47E1b575980B7D1b1508cc48bE1Df4EE508111',
  optimism: '0xb523CFAf45AACF472859f8B793CB0BFDB16bD257',
  moonbeam: '0xF0cb1f968Df01fc789762fddBfA704AE0F952197',
  gnosis: '0x36b0AA0e7d04e7b825D7E409FEa3c9A3d57E4C22',
  // solana: 'EzppBFV2taxWw8kEjxNYvby6q7W1biJEqwP3iC7YgRe3',
  // TODO: create gnosis safes here
  base: undefined,
  scroll: undefined,
  polygonzkevm: undefined,
  mantapacific: undefined,
  viction: undefined,
};

const deployer = '0xa7ECcdb9Be08178f896c26b7BbD8C3D4E844d9Ba';

export const owners: ChainMap<OwnableConfig> = objMap(safes, (local, __) => ({
  owner: deployer, // TODO: change this to the safe
  ownerOverrides: {
    proxyAdmin: timelocks[local] ?? safes[local] ?? deployer,
  },
}));
