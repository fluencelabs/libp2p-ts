// Type definitions for libp2p-pubsub 0.4.1
// Project: https://github.com/libp2p/js-libp2p-pubsub
/// <reference types="libp2p-gossipsub"/>

declare interface LibP2pPubsubUtil {
    normalizeInRpcMessage(msg: import("libp2p-gossipsub").IGossipMessage): import("libp2p-gossipsub").IGossipMessage;
}

declare module 'libp2p-pubsub' {
    export const utils: LibP2pPubsubUtil;
}
