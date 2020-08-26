// Type definitions for libp2p-pubsub 0.4.5
// Project: https://github.com/libp2p/js-libp2p-pubsub
/// <reference types="libp2p-gossipsub"/>

declare interface LibP2pPubsubUtil {
    normalizeInRpcMessage(msg: import("libp2p-gossipsub/src/message").Message): import("libp2p-gossipsub/src/message").InMessage;
}

declare module 'libp2p-pubsub' {
    export const utils: LibP2pPubsubUtil;
}
