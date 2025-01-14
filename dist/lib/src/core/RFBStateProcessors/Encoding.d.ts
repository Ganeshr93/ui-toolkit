/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/
import { ICommunicator } from '../ICommunicator';
import { IStateProcessor } from '../IStateProcessor';
import { Desktop } from '../Desktop';
import { IRLEDecoder } from '../IRLEDecoder';
/**
 * Handle encoded RFB packets. Supported encodings, RAW, ZRLE.
 */
declare class Encoding implements IStateProcessor {
    wsSocket: ICommunicator;
    next: IStateProcessor;
    parent: Desktop;
    rleDecoder: IRLEDecoder;
    updateRFBState: any;
    constructor(comm: ICommunicator, parent: Desktop, rleDecoder: IRLEDecoder, updateRFBState: (state: number) => void);
    processState(acc: string): number;
}
export { Encoding };
