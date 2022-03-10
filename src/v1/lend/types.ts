interface Pool {
  appId: number;
  assetId: number;
  fAssetId: number;
  frAssetId: number;
  assetDecimals: number;
}

interface PoolInfo {
  depositInterestRate: bigint; // 14 d.p.
  depositInterestIndex: bigint; // 14 d.p.
  borrowInterestRate: bigint; // 14 d.p.
  borrowInterestIndex: bigint; // 14 d.p.
  retentionRate: bigint; // 14 d.p.
  totalDeposits: bigint;
  totalBorrows: bigint;
  utilizationRatio: bigint; // 14 d.p.
  optimalUtilizationRatio: bigint; // 14 d.p.
  epsilon: bigint; // 14 d.p.
  latestUpdate: bigint;
  isPaused: boolean;
  isRewardsPaused: boolean;
}

interface EarnAndLock {
  appId: number;
  pool: Pool;
  linkAddr: string;
}

interface EarnAndLockInfo {
  rewardsRatio: bigint; // 14 d.p.
  timeLocked: bigint;
}

interface LockedDepositInfo {
  escrowAddress: string;
  userAddress: string;
  lockedBalance: bigint;
  release: bigint;
}

interface TokenPair {
  appId: number;
  collateralPool: Pool;
  borrowPool: Pool;
  linkAddr: string;
}

interface TokenPairInfo {
  loanToValueRatio: bigint; // 14 d.p.
  liquidationThreshold: bigint; // 14 d.p.
  safetyThreshold: bigint; // 14 d.p.
}

interface LoanInfo {
  escrowAddress: string;
  userAddress: string;
  borrowed: bigint;
  collateralBalance: bigint;
  borrowBalance: bigint;
  borrowBalanceLiquidationThreshold: bigint;
  healthFactor: bigint; // 14 d.p.
}

interface Oracle {
  oracleAppId: number;
  oracleAdapterAppId: number;
  decimals: number;
}

interface OraclePrice {
  price: bigint; // price in USD for amount 1 of asset in lowest denomination
  timestamp: bigint;
}

interface ConversionRate {
  rate: bigint; // <decimals> d.p.
  decimals: number;
}

type ReserveAddress = string;

export {
  Pool,
  PoolInfo,
  EarnAndLock,
  EarnAndLockInfo,
  LockedDepositInfo,
  TokenPair,
  TokenPairInfo,
  LoanInfo,
  Oracle,
  OraclePrice,
  ConversionRate,
  ReserveAddress,
};