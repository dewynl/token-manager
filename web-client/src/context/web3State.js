import { createContext, useContext, useEffect, useRef, useState } from "react"
import Web3Modal from "web3modal"
import { providers } from "ethers"

const Web3Context = createContext(null)

const Web3Provider = ({ address, children }) => {
	const [currentAddress, setCurrentAddress] = useState(address)
	const [walletConnected, setWalletConnected] = useState(false)
	const web3ModalRef = useRef()

	useEffect(() => {
		// if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
		if (!walletConnected) {
			web3ModalRef.current = new Web3Modal({
				network: "rinkeby",
				providerOptions: {},
				disableInjectedProvider: false,
			})

			connectWallet()
		}
	}, [currentAddress, walletConnected])

	const getProviderOrSigner = async (needSigner = false) => {
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

	const connectWallet = async () => {
		try {
			const signer = await getProviderOrSigner(true)
			setCurrentAddress(await signer.getAddress())
			setWalletConnected(true)
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<Web3Context.Provider value={{ currentAddress, setCurrentAddress }}>
			{children}
		</Web3Context.Provider>
	)
}

const useWeb3 = () => useContext(Web3Context)

export { Web3Provider, useWeb3 }
