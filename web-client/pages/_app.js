import Head from "next/head"
import { theme } from "../src/theme"
import { CacheProvider } from "@emotion/react"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import { CssBaseline } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import { createEmotionCache } from "../utils/create-emotion-cache"
import { Web3Provider } from "../src/context/web3State"

const clientSideEmotionCache = createEmotionCache()

function App(props) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

	const getLayout = Component.getLayout ?? ((page) => page)

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<title>Tokens Manager</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<ThemeProvider theme={theme}>
					<Web3Provider>
						<CssBaseline />
						{getLayout(<Component {...pageProps} />)}
					</Web3Provider>
				</ThemeProvider>
			</LocalizationProvider>
		</CacheProvider>
	)
}

export default App
