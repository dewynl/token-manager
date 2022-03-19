import { providers } from "ethers"
import Web3 from "web3"

async function getProviderOrSigner(web3ModalRef, needSigner = false) {
   const provider = await web3ModalRef.current.connect()
   const web3Provider = new providers.Web3Provider(provider)

   // If user is not connected to the Rinkeby network, let them know and throw an error
   const { chainId } = await web3Provider.getNetwork()
   if (chainId !== 4) {
      window.alert("Change the network to Rinkeby")
      throw new Error("Change network to Rinkeby")
   }

   if (needSigner) {
      const signer = web3Provider.getSigner()
      return signer
   }
   return web3Provider
}

function getAccountBalance(account) {
   const web3 = new Web3(window.ethereum)
   if (account) {
      return new Promise((resolve, reject) => {
         web3.eth.getBalance(account, (err, result) => {
            if (err) {
               reject(err)
            } else {
               resolve(web3.utils.fromWei(result, "ether"))
            }
         })
      })
   }
}

export { getProviderOrSigner, getAccountBalance }
