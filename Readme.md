| Client         | Uniswap v3  protocol                            |
| :------------- | :---------------------------------------------- |
| Title          | Smart Contract Audit Report                     |
| Target         | NonfungibleTokenPositionDescriptor              |
| Version        | 1.0                                             |
| Author         | [Mukhtar Abdulfatai](https://github.com/devmukhtarr) |
| Classification | Public                                          |
| Status         | Draft                                           |
| Date Created   | November 2, 2024                                |

## Table of contents

- <a href="#intro"> 1. INTRODUCTION</a>

  - <a href="#Disclaim"> 1.1 Disclaimer</a>
  - <a href="#About"> 1.2 About Me </a>
  - <a href="#Skills"> 1.3 Skills</a>
  - <a href="#links"> 1.4 Link</a>
  - <a href="#uns"> 1.5 Uniswap v3 Protocol</a>
  - <a href="#Gbd"> 1.6 NonfungibleTokenPositionDescriptor</a>
  - <a href="#scope"> 1.7 Scope</a>
  - <a href="#roles"> 1.8 Roles</a>
  - <a href="#overview"> 1.9 System Overview</a>

- <a href="#review"> 2.0 CONTRACT REVIEW</a>

- <a href="#findings"> 3.0 FINDINGS</a>

  - <a href="#Qanalysis"> 3.1 Qualitative Analysis</a>
  - <a href="#summary"> 3.2 Summary</a>
  - <a href="#recom"> 3.2 Recommendation</a>

- <a href="#conclusion"> 4.0 CONCLUSION</a>

<h2 id="intro">1.0 INTRODUCTION </h2>

### <h3 id="Disclaim">1.1 Disclaimer <h3>

Let it be clear that this audit is not a kind of security/functionalities assurance or risk-free smart contract or completely free from any possible inherent risks environment. Cryptocurrencies carry certain risks and losses by participating in any trading or having any dealings with this smart contract or cryptocurrencies in general are at your own risk. All persons using the Uniswap platform are recommended to carry out their own investigations for an investment decision.

### <h3 id="About">1.2 🚀 About Me <h3>

Hello, I'm Mukhtar Abdulfatai, a Smart Contract Developer. Currently, I'm gaining experience through an internship at Web3bridge, where I am focused on advancing my knowledge and skills in blockchain development.

Apart from general love for solving problems, as a developer, I possess passion for writing smart contracts, which would protect users and be most efficient to reshape our relationships with technologies. I want to stay up to date on the latest in this constantly developing profession and try to discover new technologies on my own.

### <h3 id="Skills">1.3 🛠 Skills <h3>

Solidity,Javascript, Golang, React ....

### <h3 id="links">1.4 🔗 Links <h3>


[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/abdulfatai-mukhtar-77a2131b1/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/devmukhtar)

### <h3 id="Uns">1.5 Uniswap v3 Protocol<h3>

Uniswap V3 is a decentralized exchange (DEX) protocol that enhances the efficiency and flexibility of automated market-making (AMM) on the Ethereum blockchain. Unlike its predecessors, Uniswap V3 introduces concentrated liquidity, allowing liquidity providers (LPs) to allocate their funds within specific price ranges instead of across the entire price curve.

This approach improves capital efficiency, as LPs can earn higher fees relative to the amount they invest by focusing on narrower price bands. Additionally, Uniswap V3 enables multiple fee tiers, letting LPs set fees based on the risk and volatility of the trading pairs they support. 

This design provides a more customizable and capital-efficient trading experience, catering to a broad range of users from retail investors to institutional participants.

#### Key aspects of Uniswap v3 Protocol include:

1. Non-Fungible Liquidity Positions: Each liquidity position is represented as an NFT, as each LP can set unique price ranges, which makes positions distinct and non-fungible.

2. Improved Capital Efficiency: By enabling LPs to concentrate liquidity, Uniswap V3 allows them to earn higher fees with less capital, achieving more efficient use of their assets.

3. Concentrated Liquidity: Liquidity providers can concentrate their funds within specific price ranges, enhancing capital efficiency and allowing for more targeted liquidity provision.

### <h3 id="Gbd">1.6 NonfungibleTokenPositionDescriptor<h3>

The NonfungibleTokenPositionDescriptor contract is a contract that is responsible for generating Non fungible token (NFT) for Liquidity providers when they provide Liquidity in the Uniswap V3 Protocol.

### <h3 id="scope">1.7 Scope <h3>

_(**Table: 1.7**: NonfungibleTokenPositionDescriptor Audit Scope)_
| Files in scope | SLOC |
| :-------- | :------- |
| Contracts: 1 | |
| `NonfungibleTokenPositionDescriptor.sol` | `125` |
| | |
| Imports: 7 | |
| `ChainId.sol` | `13` |
| `INonfungiblePositionManager.sol` | `179` |
| `INonfungibleTokenPositionDescriptor.sol` | `17` |
| `IERC20Metadata.sol` | `18` |
| `PoolAddress.sol` | `47` |
| `NFTDescriptor.sol` | `477` |
| `TokenRatioSortOrder.sol` | `12` |

### <h3 id="roles"> 1.8 Roles <h3>

- #### Operator

  - Initialize contract.

- #### Liquidity Provider

  - Providing Liquidity in Price Ranges.
  - Earning Transaction Fees.
  - Managing and Adjusting Positions.
  - Minting and Holding Liquidity NFTs:.

### <h3 id="overview"> 1.9 System Overview <h3>

- #### NonfungibleTokenPositionDescriptor.sol: 

 The contract generates on-chain metadata and visuals (SVG images) for each unique liquidity position NFT in Uniswap V3, displaying details like token pairs, price ranges, and liquidity.
  

- #### ChainId.sol:

 The library provides a function to retrieve the current blockchain network's unique chain ID.
  

- #### INonfungiblePositionManager.sol:

 The interface defines the core functions and events for managing liquidity positions represented as non-fungible tokens (NFTs)
  

- #### INonfungibleTokenPositionDescriptor.sol:

 The interface defines the functions for generating metadata and visual representations (like SVG images) for Uniswap V3 liquidity position
  

- #### IERC20Metadata.sol:

 The interface extends the basic IERC20 interface by adding optional metadata functions for ERC20 tokens, including functions to retrieve the token’s name, symbol, and decimal precision, enhancing token information accessibility
  

- #### PoolAddress.sol:

  The library provides a utility to deterministically calculate the address of a Uniswap V3 pool based on token addresses and fee tier.

- #### NFTDescriptor.sol:
The library generates on-chain SVG images and descriptive metadata for liquidity position NFTs, visually representing details such as token pair, price range, and liquidity amount.
  

- #### TokenRatioSortOrder.sol:

  The library in Uniswap V3 provides utility functions for sorting and comparing token ratios, facilitating the organization of liquidity positions based on the ratio of tokens involved, which is useful for managing and optimizing liquidity

## <h2 id="review"> 2.0 CONTRACT REVIEW <h2>

The contract contains the following state constant variables:

```bash
    address private constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
```

This line defines a private constant address variable named DAI and assigns it the DAI contract address.

```bash
    address private constant USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;
```

This line defines a private constant address variable named USDC and assigns it the USDC contract address.

```bash
    address private constant USDT = 0xdAC17F958D2ee523a2206206994597C13D831ec7;
```

This line defines a private constant address variable named USDT and assigns it the USDT contract address.

```bash
    address private constant TBTC = 0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa;
```

This line defines a private constant address variable named TBTC and assigns it the TBTC contract address.

```bash
    address private constant WBTC = 0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599;
```

This line defines a private constant address variable named WBTC and assigns it the WBTC contract address.


### 2.1 nativeCurrencyLabel():

```bash
  function nativeCurrencyLabel() public view returns (string memory) {
        uint256 len = 0;
        while (len < 32 && nativeCurrencyLabelBytes[len] != 0) {
            len++;
        }
        bytes memory b = new bytes(len);
        for (uint256 i = 0; i < len; i++) {
            b[i] = nativeCurrencyLabelBytes[i];
        }
        return string(b);
    }
```

This function is used to get a currency label like "ETH" for Ethereum, it does this by taking the non zero bytes and then converting them to string.

### 2.2 tokenURI(INonfungiblePositionManager positionManager, uint256 tokenId):

```bash
  function tokenURI(INonfungiblePositionManager positionManager, uint256 tokenId)
        external
        view
        override
        returns (string memory)
    {
        (, , address token0, address token1, uint24 fee, int24 tickLower, int24 tickUpper, , , , , ) =
            positionManager.positions(tokenId);

        IUniswapV3Pool pool =
            IUniswapV3Pool(
                PoolAddress.computeAddress(
                    positionManager.factory(),
                    PoolAddress.PoolKey({token0: token0, token1: token1, fee: fee})
                )
            );

        bool _flipRatio = flipRatio(token0, token1, ChainId.get());
        address quoteTokenAddress = !_flipRatio ? token1 : token0;
        address baseTokenAddress = !_flipRatio ? token0 : token1;
        (, int24 tick, , , , , ) = pool.slot0();

        return
            NFTDescriptor.constructTokenURI(
                NFTDescriptor.ConstructTokenURIParams({
                    tokenId: tokenId,
                    quoteTokenAddress: quoteTokenAddress,
                    baseTokenAddress: baseTokenAddress,
                    quoteTokenSymbol: quoteTokenAddress == WETH9
                        ? nativeCurrencyLabel()
                        : SafeERC20Namer.tokenSymbol(quoteTokenAddress),
                    baseTokenSymbol: baseTokenAddress == WETH9
                        ? nativeCurrencyLabel()
                        : SafeERC20Namer.tokenSymbol(baseTokenAddress),
                    quoteTokenDecimals: IERC20Metadata(quoteTokenAddress).decimals(),
                    baseTokenDecimals: IERC20Metadata(baseTokenAddress).decimals(),
                    flipRatio: _flipRatio,
                    tickLower: tickLower,
                    tickUpper: tickUpper,
                    tickCurrent: tick,
                    tickSpacing: pool.tickSpacing(),
                    fee: fee,
                    poolAddress: address(pool)
                })
            );
    }
```

This function take position information and the token id, It then returns a URI (in JSON format) that provides a readable description of the NFT.

#### 2.3 flipRatio():

```bash
      function flipRatio(
        address token0,
        address token1,
        uint256 chainId
    ) public view returns (bool) {
        return tokenRatioPriority(token0, chainId) > tokenRatioPriority(token1, chainId);
    }
```

This function collects address of token0,token1 and chainId and then displays them on the NFT based on the priority level according to the tokenRatioPriority(address token, uint256 chainId) function.

#### 2.4 function tokenRatioPriority(address token, uint256 chainId):

```bash
  function tokenRatioPriority(address token, uint256 chainId) public view returns (int256) {
        if (token == WETH9) {
            return TokenRatioSortOrder.DENOMINATOR;
        }
        if (chainId == 1) {
            if (token == USDC) {
                return TokenRatioSortOrder.NUMERATOR_MOST;
            } else if (token == USDT) {
                return TokenRatioSortOrder.NUMERATOR_MORE;
            } else if (token == DAI) {
                return TokenRatioSortOrder.NUMERATOR;
            } else if (token == TBTC) {
                return TokenRatioSortOrder.DENOMINATOR_MORE;
            } else if (token == WBTC) {
                return TokenRatioSortOrder.DENOMINATOR_MOST;
            } else {
                return 0;
            }
        }
        return 0;
    }
```

This function recieves token address and chainId and then return values as assigned in the `TokenRatioSortOrder.sol` file

## <h2 id="findings">3.0 FINDINGS </h2>

I found out the contract handles it's task in a clear way, It was easy to read through and understand what was happening in all lines.

### <h3 id="Qanalysis"> 3.1 Qualitative Analysis<h3>

_(**Table: 3.1**: NonfungibleTokenPositionDescriptor Qualitative Analysis)_
| Metric | Rating | Comment |
| :-------- | :------- | :----- |
| Code Complexity | Excellent | Functionality is very simple and organized |
| Documentation | Moderate | Documentation could be improved |
| Best Practices | Excellent | it adhered to best practices |

### <h3 id="summary">3.2 Summary<h3>

In summary, the code appears to be well-structured and follows best practices for a Solidity smart contract.

### <h3 id="recom">3.2 Recommendations<h3>

More resources about the contract and images about what it does and how it does them will be helpful.

## <h2 id="conclusion">4.0 CONCLUSION </h2>

In this audit, I have thoroughly examined the "NonfungibleTokenPositionDescriptor" Solidity smart contract, focusing on its design and implementation. "NonfungibleTokenPositionDescriptor" is a critical component for Describing liquidity positions.

The code is well-structured, adhering to established Solidity development best practices. It reflects a solid approach to getting NFT when liquidity is provided, following principles of secure and efficient smart contract design.

However, considering the evolving nature of blockchain technology and smart contract security, continued testing, auditing, and potential updates are recommended to maintain and enhance the contract's reliability and functionality.

Overall, the "NonfungibleTokenPositionDescriptor.sol" contract presents a solid foundation for getting NFT that describes position of a liquidity provider.