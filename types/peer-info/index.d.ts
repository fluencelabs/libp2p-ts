// Type definitions for peer-info 0.14.1
// Project: https://github.com/libp2p/js-peer-info
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>
/// <reference types="multiaddr"/>

declare namespace PeerInfo {
    type CreateCb = (error: Error | null, peerId?: PeerInfo) => any;

    type CreateOptions = {
        bits: number
    };

    type MultiaddrSet = {
        readonly size: number;

        add(addr: import("multiaddr") | string): void;
        addSafe(add: import("multiaddr") | string): void;
        delete(addr: import("multiaddr")): void;
        forEach(cb: (addr: import("multiaddr"), index: number) => any): void;
        has(addr: import("multiaddr")): boolean;
        replace(addr: import("multiaddr"), other: import("multiaddr")): void;
        toArray(): import("multiaddr")[];
    };
}

declare class PeerInfo {
    constructor(id?: import("peer-id"));

    static create(optsOrCb: PeerInfo.CreateOptions | PeerInfo.CreateCb, cb?: PeerInfo.CreateCb): void;
    static isPeerInfo(info: any): info is PeerInfo;

    readonly id: import("peer-id");
    readonly multiaddrs: PeerInfo.MultiaddrSet;

    connect(addr: import("multiaddr")): void;
    disconnect(): void;
    isConnected(): boolean;
}

declare module 'peer-info' {
    export default PeerInfo;
}
