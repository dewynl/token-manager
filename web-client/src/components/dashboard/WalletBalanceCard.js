import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import { useEffect, useState } from "react"
import { getAccountBalance } from "../../../utils/web-utils"
import { useWeb3 } from "../../context/web3State"
import InfoCard from "../InfoCard"

export const WalletBalanceCard = (props) => {
   const { currentAddress } = useWeb3()
   const [currentBalance, setCurrentBalance] = useState(undefined)

   useEffect(() => {
      const updateBalance = async () => {
         const balance = await getAccountBalance(currentAddress, 6)
         setCurrentBalance(balance)
      }

      updateBalance()
   }, [currentAddress])

   return (
      <InfoCard
         title="Balance"
         value={`${currentBalance ? currentBalance : "0"} eth`}
         icon={<AttachMoneyIcon />}
         {...props}
      />
   )
}
