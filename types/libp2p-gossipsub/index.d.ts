// Type definitions for libp2p-gossipsub v0.2.3
// Project https://github.com/ChainSafe/gossipsub-js

/// <reference types="node"/>
/// <reference types="peer-info"/>

declare module 'libp2p-gossipsub' {
    export interface Registrar {
        handle: Function;
        register(topology: Object): string;
        unregister(id: string): boolean;
    }

    export interface IGossipMessage {
        from: Buffer | string;
        data: Buffer;
        seqno: Buffer;
        topicIDs: string[];
    }

    export interface Options {
        emitSelf?: boolean,
        gossipIncoming?: boolean,
        fallbackToFloodsub?: boolean,
    }

    export default class GossipSub {
        constructor(peerInfo: PeerInfo, registrar: Registrar, options: Options);
        validate(message: IGossipMessage): Promise<boolean>;
        _emitMessage(topics: string[], message: IGossipMessage): void;
        getTopics(): string[];
        // EventEmitter
        emit(event: string | symbol, ...args: any[]): boolean;
    }
}
