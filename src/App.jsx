import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import HomeIcon from '@mui/icons-material/Home'
import { pink } from '@mui/material/colors'

function App() {
  return (
    <>
      <div>giang vu</div>
      <Button variant="text">xin chao</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined">313123</Button>

      <br />
      <AccessAlarmIcon />
      <ThreeDRotation />

      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[500] }} />
    </>
  )
}

export default App
