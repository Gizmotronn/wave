import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Accessible',
    description: 'Get signals on any device at any time. Never again will you miss a bull run or cash out too late because you were away from your trading workstation',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Automatable',
    description: "If your wallet or trading platform allows API access, this can all be automated - meaning you don't have to lfit a finger.",
    icon: <AttachMoneyIcon />,
  },
]