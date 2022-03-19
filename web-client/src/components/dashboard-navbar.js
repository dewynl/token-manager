import PropTypes from "prop-types"
import styled from "@emotion/styled"
import {
	AppBar,
	Box,
	IconButton,
	Toolbar,
	Tooltip,
	Typography,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { Coin } from "../icons/coin"
import { useWeb3 } from "../context/web3State"
import { useEffect, useState } from "react"
import { getAccountBalance } from "../../utils/web-utils"
import { useRouter } from "next/router"

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	boxShadow: theme.shadows[3],
}))

export const DashboardNavbar = (props) => {
	const { onSidebarOpen, ...other } = props
	const { currentAddress } = useWeb3()
	const [currentBalance, setCurrentBalance] = useState(undefined)
	const router = useRouter()
	const shouldShowBalance = router.pathname !== "/"

	useEffect(() => {
		const updateBalance = async () => {
			const balance = await getAccountBalance(currentAddress, 6)
			setCurrentBalance(balance)
		}

		updateBalance()
	}, [currentAddress])

	return (
		<>
			<DashboardNavbarRoot
				sx={{
					left: {
						lg: 280,
					},
					width: {
						lg: "calc(100% - 280px)",
					},
				}}
				{...other}>
				<Toolbar
					disableGutters
					sx={{
						minHeight: 64,
						left: 0,
						px: 2,
					}}>
					<IconButton
						onClick={onSidebarOpen}
						sx={{
							display: {
								xs: "inline-flex",
								lg: "none",
							},
						}}>
						<MenuIcon fontSize="small" />
					</IconButton>
					<Box sx={{ flexGrow: 1 }} />

					{shouldShowBalance && (
						<>
							<IconButton sx={{ ml: 1 }}>
								<Coin fontSize="small" />
							</IconButton>
							<Typography style={{ color: "black" }}>
								{currentBalance}
							</Typography>
						</>
					)}
				</Toolbar>
			</DashboardNavbarRoot>
		</>
	)
}

DashboardNavbar.propTypes = {
	onSidebarOpen: PropTypes.func,
}
