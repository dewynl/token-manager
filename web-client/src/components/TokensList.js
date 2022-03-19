import {
	Avatar,
	Box,
	Card,
	Checkbox,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TablePagination,
	TableRow,
	Typography,
} from "@mui/material"
import { useState } from "react"
import PerfectScrollbar from "react-perfect-scrollbar"
import PropTypes from "prop-types"

function TokensList({ tokens, ...rest }) {
	const [selectedTokensIds, setSelectedTokensIds] = useState([])
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(0)

	return (
		<>
			<Card {...rest}>
				<PerfectScrollbar>
					<Box sx={{ minWidth: 1050 }}>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell padding="checkbox">
										<Checkbox
											checked={selectedTokensIds.length === tokens.length}
											color="primary"
											indeterminate={
												selectedTokensIds.length > 0 &&
												selectedTokensIds.length < tokens.length
											}
											onChange={() => {}}
										/>
									</TableCell>
									<TableCell>Name</TableCell>
									<TableCell>Code</TableCell>
									<TableCell>Address</TableCell>
									<TableCell>Amount</TableCell>
									<TableCell>Balance in Ethereum</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{tokens.slice(0, limit).map((customer) => (
									<TableRow
										hover
										key={customer.id}
										selected={selectedTokensIds.indexOf(customer.id) !== -1}>
										<TableCell padding="checkbox">
											<Checkbox
												checked={selectedTokensIds.indexOf(customer.id) !== -1}
												onChange={(event) => {}}
												value="true"
											/>
										</TableCell>
										<TableCell>
											<Box
												sx={{
													alignItems: "center",
													display: "flex",
												}}>
												<Avatar src={customer.avatarUrl} sx={{ mr: 2 }}>
													{getInitials(customer.name)}
												</Avatar>
												<Typography color="textPrimary" variant="body1">
													{customer.name}
												</Typography>
											</Box>
										</TableCell>
										<TableCell>{customer.email}</TableCell>
										<TableCell>
											{`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`}
										</TableCell>
										<TableCell>{customer.phone}</TableCell>
										<TableCell>
											{format(customer.createdAt, "dd/MM/yyyy")}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</Box>
				</PerfectScrollbar>
				<TablePagination
					component="div"
					count={tokens.length}
					onPageChange={() => {}}
					onRowsPerPageChange={() => {}}
					page={0}
					rowsPerPage={limit}
					rowsPerPageOptions={[5, 10, 25]}
				/>
			</Card>
		</>
	)
}

TokensList.propTypes = {
	tokens: PropTypes.array.isRequired,
}

export default TokensList
