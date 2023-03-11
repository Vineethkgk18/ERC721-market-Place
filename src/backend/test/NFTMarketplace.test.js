const { expect } = require("chai");

describe("NFTMarketplace", function () {
    let deployer;
    let addr1;
    let addr2;
    let nft;
    let marketplace;
    let feePercent = 1;

    beforeEach(async function () {
        // Get the ContractFactories 
        NFT = await ethers.getContractFactory("NFT");
        Marketplace = await ethers.getContractFactory("Marketplace");

        [deployer, addr1, addr2] = await ethers.getSigners();
        // To deploy our contracts
        nft = await NFT.deploy();
        marketplace = await Marketplace.deploy(feePercent);

    });

    describe("Deployment", function(){
        it("Should track name and symbol of the nft collection ", async function(){
            expect(await nft.name()).to.equal("DApp NFT")
            expect(await nft.symbol()).to.equal("DAPP")
        })
        it("Should track feeAccount and feePercent of the marketplace", async function(){
            expect(await marketplace.feeAccount()).to.equal(deployer.address);
            expect(await marketplace.feePercent()).to.equal(feePercent);
        })
    })
});