import { Frame, Button, ThemeProvider } from '@react95/core'
import { Computer, Mprserv121, Mapi32801, RecycleEmpty, Explore, MicrosoftNetwork, Syncui120, User1, Systray220 } from '@react95/icons'
import QuakeLogo from './images/quake.ico'

export default function Desktop(props) {
  return (
    <ThemeProvider>
      <div id='desktop'>
        <div id='display'>
          <button className='display-icon'>
            <Computer />
            <small>My Computer</small>
          </button>
          <button className='display-icon'>
            <Mprserv121 />
            <small>Network Neighborhood</small>
          </button>
          <button className='display-icon'>
            <Mapi32801 />
            <small>Inbox</small>
          </button>
          <button className='display-icon'>
            <RecycleEmpty />
            <small>Recycle Bin</small>
          </button>
          <button className='display-icon'>
            <Explore />
            <small>The Internet</small>
          </button>
          <button className='display-icon'>
            <MicrosoftNetwork />
            <small>The Microsoft Network</small>
          </button>
          <button className='display-icon'>
            <Syncui120 />
            <small>My Briefcase</small>
          </button>
          <button className='display-icon'>
            <img alt='Quake Logo' src={QuakeLogo} />
            <small>Quake</small>
          </button>
        </div>
        <Frame id='taskbar'>
          <Button id='btn-start'>
            <User1 id='win-logo' />
            <small>Start</small>
          </Button>
          <Frame id='sys-tray' boxShadow='in'>
            <Systray220 id='audio' />
            <small>{props.time}</small>
          </Frame>
        </Frame>
      </div>
    </ThemeProvider>
  );
}
