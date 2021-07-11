import { ethers } from 'ethers';

export const privateKeys = [
  '0xa2876515c3b338fa69cf5b615aec7f325ada367af784b074080a13b39ff95f7c',
  '0x804d7046a56c8feb638cacfe41c0f24663ec9f422ac86d5323bd4449a4fb173f',
  '0x192dc8f9cb9300bc0c4ce82a27a6542032e0382dcbbb43f2c1e0780b41c705ae',
  '0x8de4b2acc329a4b8c091efe4abc7092213bb552ad2f31fb18ada92db3433920c',
  '0xb21dba556b8b5dba3b96860a848dadb6ce8e1cace9f63e86fc344a2eb2b36492',
  '0xdf4ada197a1a0690def2bf0bdcf1ab5fd05f7861ed3a2872b9d146eccf418af6',
  '0xa94042bfa22ce6c4420ba22a7d2a97978a66bc94d7f1ff53672510c9ed5cb365',
  '0xa09306f24c3a38f9caef98c43fc618f4ee5a40c72d5a43444499c551221dd986',
  '0xacf163f112e172683a3ec6edd34b0061f29e5db2448c65f85552c7aca056cb41',
];

export function generatedWallets(provider: ethers.providers.BaseProvider) {
  return privateKeys.map((key: string) => {
    return new ethers.Wallet(key, provider);
  });
}

export async function signMessage(message: string, wallet: ethers.Wallet) {
  const messageHash = ethers.utils.id(message);
  const messageHashBytes = ethers.utils.arrayify(messageHash);
  const flatSig = await wallet.signMessage(messageHashBytes);
  return ethers.utils.arrayify(flatSig);
}
