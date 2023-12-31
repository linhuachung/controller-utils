/**
 * The names of built-in Infura networks
 */
export declare const InfuraNetworkType: {
    readonly mainnet: "mainnet";
    readonly goerli: "goerli";
    readonly sepolia: "sepolia";
    readonly 'linea-goerli': "linea-goerli";
    readonly 'linea-mainnet': "linea-mainnet";
    readonly 'adil-testnet': "adil-testnet";
    readonly 'adil-mainnet': "adil-mainnet";
};
export declare type InfuraNetworkType = (typeof InfuraNetworkType)[keyof typeof InfuraNetworkType];
/**
 * The "network type"; either the name of a built-in network, or "rpc" for custom networks.
 */
export declare const NetworkType: {
    readonly rpc: "rpc";
    readonly mainnet: "mainnet";
    readonly goerli: "goerli";
    readonly sepolia: "sepolia";
    readonly 'linea-goerli': "linea-goerli";
    readonly 'linea-mainnet': "linea-mainnet";
    readonly 'adil-testnet': "adil-testnet";
    readonly 'adil-mainnet': "adil-mainnet";
};
export declare type NetworkType = (typeof NetworkType)[keyof typeof NetworkType];
/**
 * A helper to determine whether a given input is NetworkType.
 *
 * @param val - the value to check whether it is NetworkType or not.
 * @returns boolean indicating whether or not the argument is NetworkType.
 */
export declare function isNetworkType(val: any): val is NetworkType;
/**
 * Names of networks built into the wallet.
 *
 * This includes both Infura and non-Infura networks.
 */
export declare enum BuiltInNetworkName {
    Mainnet = "mainnet",
    Goerli = "goerli",
    Sepolia = "sepolia",
    LineaGoerli = "linea-goerli",
    LineaMainnet = "linea-mainnet",
    Aurora = "aurora",
    AdilTestnet = "adil-testnet",
    AdilMainnet = "adil-mainnet"
}
/**
 * Decimal string chain IDs of built-in networks, by name.
 *
 * `toHex` not invoked to avoid cyclic dependency
 */
export declare const ChainId: {
    readonly mainnet: "0x1";
    readonly goerli: "0x5";
    readonly sepolia: "0xaa36a7";
    readonly aurora: "0x4e454152";
    readonly "linea-goerli": "0xe704";
    readonly "linea-mainnet": "0xe708";
    readonly "adil-testnet": "0x1d97";
    readonly "adil-mainnet": "0x1d98";
};
export declare type ChainId = (typeof ChainId)[keyof typeof ChainId];
/**
 * Decimal string network IDs of built-in Infura networks, by name.
 */
export declare const NetworkId: {
    readonly mainnet: "1";
    readonly goerli: "5";
    readonly sepolia: "11155111";
    readonly "linea-goerli": "59140";
    readonly "linea-mainnet": "59144";
    readonly "adil-testnet": "7575";
    readonly "adil-mainnet": "7576";
};
export declare type NetworkId = (typeof NetworkId)[keyof typeof NetworkId];
export declare enum NetworksTicker {
    mainnet = "ETH",
    goerli = "GoerliETH",
    sepolia = "SepoliaETH",
    'linea-goerli' = "LineaETH",
    'linea-mainnet' = "ETH",
    'adil-testnet' = "ADIL",
    'adil-mainnet' = "ADIL",
    rpc = ""
}
//# sourceMappingURL=types.d.ts.map