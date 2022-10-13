import React from 'react'
import { Window, WindowContent, Button, Toolbar, Divider, TextField, List, ListItem } from 'react95'
import { Frame, TitleBar, ThemeProvider } from '@react95/core'
import { Calculator as CalcIcon } from '@react95/icons'

export default function Calculator() {
  const [editOpen, setEditOpen] = React.useState(false)
  const [viewOpen, setViewOpen] = React.useState(false)
  const [helpOpen, setHelpOpen] = React.useState(false)

  return (
    <ThemeProvider>
      <Window id='calculator'>
        <TitleBar
          active
          icon={<CalcIcon />}
          title='Calculator'
          className='calc-title'
          height={50}
        >
          <TitleBar.OptionsBox title-options>
            <button>
              <TitleBar.Option className='title-_'>
                <small>_</small>
              </TitleBar.Option>
            </button>
            <button>
              <TitleBar.Option className='title-□'>
                <small>□</small>
              </TitleBar.Option>
            </button>
            <button>
              <TitleBar.Option className='title-X'>
                <small>X</small>
              </TitleBar.Option>
            </button>
          </TitleBar.OptionsBox>
        </TitleBar>
        <Toolbar id='calc-header'>
          <button
            variant='menu'
            size='sm'
            onClick={() => setEditOpen(!editOpen)}
            active={editOpen}
            >Edit</button>
            {editOpen && (
              <List
                style={{
                  position: 'absolute',
                  left: '0',
                  top: '100%',
                  zIndex: '9999'
                }}
                open={editOpen}
                onClick={() => setEditOpen(false)}
              >
                <ListItem size='sm'>
                  <small>Copy</small>
                  <small>Ctrl+C</small>
                </ListItem>
                <ListItem size='sm'>
                  <small>Paste</small>
                  <small>Ctrl+V</small>
                </ListItem>
              </List>
            )}
          <button
            variant='menu'
            size='sm'
            onClick={() => setViewOpen(!viewOpen)}
            active={viewOpen}
          >View</button>
          {viewOpen && (
            <List
              style={{
                position: 'absolute',
                left: '50px',
                top: '100%',
                zIndex: '9999'
              }}
              open={viewOpen}
              onClick={() => setViewOpen(false)}
            >
              <ListItem size='sm'>Scientific</ListItem>
              <ListItem size='sm'>Standard</ListItem>
            </List>
          )}
          <button
            variant='menu'
            size='sm'
            onClick={() => setHelpOpen(!helpOpen)}
            active={helpOpen}
          >Help</button>
          {helpOpen && (
            <List
              style={{
                position: 'absolute',
                left: '100px',
                top: '100%',
                zIndex: '9999'
              }}
              open={helpOpen}
              onClick={() => setHelpOpen(false)}
            >
              <ListItem size='sm'>Help Topics</ListItem>
              <Divider />
              <ListItem size='sm'>About Calculator</ListItem>
            </List>
          )}
        </Toolbar>
        <Divider />
        <TextField id='calc-display' />
        <WindowContent id='calc-window'>
          <div id='calc-memory'>
            <Frame h={40} />
            <Button>MC</Button>
            <Button>MR</Button>
            <Button>MS</Button>
            <Button>M+</Button>
          </div>
          <div id='calc-clear'>
            <Button id='back'>Back</Button>
            <Button id='clear-entry'>CE</Button>
            <Button id='clear'>C</Button>
          </div>
          <div id='calc-math'>
            <div id='calc-numpad'>
              <Button>7</Button>
              <Button>8</Button>
              <Button>9</Button>
              <Button>4</Button>
              <Button>5</Button>
              <Button>6</Button>
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>0</Button>
              <Button>+/-</Button>
              <Button>.</Button>
            </div>
            <div id='calc-ops'>
              <Button>/</Button>
              <Button>*</Button>
              <Button>-</Button>
              <Button>+</Button>
              <Button>=</Button>
              <div id='calc-ops-adv'>
                <Button>sqrt</Button>
                <Button>%</Button>
                <Button>1/x</Button>
              </div>
            </div>
          </div>
        </WindowContent>
      </Window>
    </ThemeProvider>
  )
}
