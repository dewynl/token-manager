import PropTypes from "prop-types"
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material"
export default function CreateTokenModal({ onModalClose, ...rest }) {
	const handleCloseModal = () => {
		onModalClose()
	}

	return (
		<Dialog open={true} onClose={handleCloseModal}>
			<DialogTitle>Create new token</DialogTitle>
			<DialogContent>
				<DialogContentText>Lets create a new token!</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleCloseModal}>Disagree</Button>
				<Button onClick={handleCloseModal} autoFocus>
					Agree
				</Button>
			</DialogActions>
		</Dialog>
	)
}

CreateTokenModal.propTypes = {
	onModalClose: PropTypes.func.isRequired,
}
