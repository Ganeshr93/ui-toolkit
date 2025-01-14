/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import * as React from 'react'
import { ConnectButton } from './Connectbutton'
import { DesktopSettings } from './Desktopsettings'
import Style from 'styled-components' 
require('./Header.scss')

const StyledLabel = Style.label`
font-size : 15px;
margin-left: 30px;
`

const StyledDiv = Style.div`
display : inline-block;
padding : 0px 5px;
`
export interface IHeaderProps {
  kvmstate: number
  deviceId: string | null
  server: string | null
  handleConnectClick: (e: any) => void
  changeDesktopSettings: (settings: any) => void
  getConnectState: () => number
}

export class Header extends React.Component<IHeaderProps> {

  render(): JSX.Element {
    return (
      <React.Fragment>
        <div className="header">
          <ConnectButton
            handleConnectClick={this.props.handleConnectClick}
            kvmstate={this.props.kvmstate}
          />
          <DesktopSettings
            changeDesktopSettings={this.props.changeDesktopSettings}
            getConnectState={this.props.getConnectState}
          />
        </div>
      </React.Fragment>
    )
  }
}

