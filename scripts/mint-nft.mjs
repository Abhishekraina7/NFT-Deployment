const CONTRACT_ADDRESS = "0xF03d3A939713bC4Ad941d2E08304047C334eE68a"
const META_DATA_URL = "ipfs://bafyreiakqusv3mngm57cvj2irh26674grnfucmq54qb6e6d3btheny24uy/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
   const [owner] = await ethers.getSigners()
   await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error);
      process.exit(1);
   });