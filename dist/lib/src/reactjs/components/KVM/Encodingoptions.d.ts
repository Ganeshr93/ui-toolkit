/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import * as React from 'react';
export interface IEncodingOptions {
    changeEncoding: (encoding: number) => void;
    getConnectState: () => number;
}
export declare class EncodingOptions extends React.Component<IEncodingOptions, {
    value: number;
}> {
    constructor(props: IEncodingOptions);
    onEncodingChange(e: any): void;
    render(): React.ReactNode;
}
