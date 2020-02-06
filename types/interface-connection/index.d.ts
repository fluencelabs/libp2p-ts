// Type definitions for interface-connection 0.3.2
// Project: https://github.com/libp2p/interface-connection
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="multiaddr"/>

declare interface LibP2pConnection {
    localPeer: import("peer-id");
    remotePeer: import("peer-id");
    id: string;
    localAddr: Multiaddr.Multiaddr;
    remoteAddr: Multiaddr.Multiaddr;
    close(): Promise<void>;
}
