import React, { useState } from "react"
import Head from "next/head"
import { Box, Button, Container, Typography } from "@mui/material"
import { DashboardLayout } from "../src/components/dashboard-layout"
import TokensList from "../src/components/TokensList"
import CreateTokenModal from "../src/components/modals/CreateTokenModal"

function CreateTokenPage() {
	const [showCreateTokenModal, setShowCreateTokenModal] = useState(false)

	const handleCloseModal = () => {
		setShowCreateTokenModal(false)
	}

	return (
		<>
			<Head>
				<title>Create Tokens</title>
			</Head>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					py: 8,
				}}>
				<Container maxWidth={false}>
					<Box
						sx={{
							alignItems: "center",
							display: "flex",
							justifyContent: "space-between",
							flexWrap: "wrap",
							m: -1,
						}}>
						<Typography sx={{ m: 1 }} variant="h4">
							Tokens
						</Typography>
						<Button
							color="primary"
							variant="contained"
							onClick={() => setShowCreateTokenModal(true)}>
							Create Token
						</Button>
					</Box>
					<Box sx={{ m: 1 }}>
						<TokensList tokens={[]}></TokensList>
					</Box>
				</Container>
			</Box>
			{showCreateTokenModal && (
				<CreateTokenModal onModalClose={handleCloseModal} />
			)}
		</>
	)
}

CreateTokenPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default CreateTokenPage
