import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useEffect, useState } from 'react';
import { getAccountBalance } from '../../../utils/web-utils';
import { useWeb3 } from '../../context/web3State';
import InfoCard from '../InfoCard';

export const WalletBalanceCard = (props) => {
  const { currentAddress } = useWeb3()
  const [currentBalance, setCurrentBalance] = useState(undefined)

  useEffect(async () => {
    const balance = await getAccountBalance(currentAddress)
    setCurrentBalance(balance)
  }, [currentAddress])

  return <InfoCard title='Balance' value={`${currentBalance ? Number.parseFloat(currentBalance).toFixed(6) : '0'} eth`} icon={<AttachMoneyIcon />} {...props}  />;
}