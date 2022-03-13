import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InfoCard from '../InfoCard'

export const TotalProfit = (props) => (
  <InfoCard title='Total in Ethereum' value='$23K' icon={<AttachMoneyIcon />} {...props}  />
);