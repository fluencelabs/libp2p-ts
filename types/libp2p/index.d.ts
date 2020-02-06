// Type definitions for libp2p 0.22.0
// Project: https://github.com/libp2p/js-libp2p
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="libp2p-bootstrap"/>
/// <reference types="interface-connection"/>
/// <reference types="interface-transport"/>
/// <reference types="libp2p-kad-dht"/>
/// <reference types="libp2p-mdns"/>
/// <reference types="libp2p-mplex"/>
/// <reference types="libp2p-secio"/>
/// <reference types="libp2p-spdy"/>
/// <reference types="peer-info"/>

declare namespace LibP2p {
    export type OptionsConfig = {
        contentRouting?: {},
        dht?: {
            kBucketSize?: number
        },
        peerDiscovery?: {
            autoDial?: boolean,
            enabled?: boolean,
            bootstrap?: {
                enabled?: boolean,
                list: Array<string | Multiaddr.Multiaddr>,
                interval?: number,
            },
            mdns?: {
                enabled?: boolean,
                broadcast?: boolean,
                interval?: number,
                peerInfo: PeerInfo,
                port?: number,
                serviceTag?: string
            },
            webRTCStar?: {
                interval?: number
                enabled?: boolean
            },
            websocketStar?: {
                enabled?: boolean
            }
        },
        peerRouting?: {},
        pubsub?: {
            enabled?: boolean,
            emitSelf?: boolean,
            signMessages?: boolean,
            strictSigning?: boolean
        },
        relay?: {
            enabled?: boolean,
            hop?: {
                enabled?: boolean,
                active?: boolean
            }
        }
    };

    export type OptionsModules = {
        connEncryption?: Array<LibP2pSecio>,
        streamMuxer: Array<LibP2pMplex | LibP2pSpdy>,
        dht?: typeof LibP2pKadDht,
        peerDiscovery: Array<typeof LibP2pBootstrap | typeof LibP2pMdns>,
        transport: LibP2pTransport[]
    };

    export type Options = {
        config: OptionsConfig,
        modules: OptionsModules,
        peerInfo: PeerInfo,
    };

    export type Events = 'peer:connect' | 'peer:disconnect' | 'peer:discovery' | 'start' | 'stop';
}

declare class PeerStore {
    readonly peers: Map<string, PeerInfo>;
}

declare class Registrar {
    getConnection(peerInfo: PeerInfo): LibP2pConnection;
    handle: Function;
    register(topology: Object): string;
    unregister(id: string): boolean;
}

declare class LibP2p {
    readonly _dht: LibP2pKadDht;

    constructor(options: LibP2p.Options);

    static create(options: LibP2p.Options): Promise<LibP2p>;

    readonly peerInfo: PeerInfo;
    readonly peerStore: PeerStore;
    readonly registrar: Registrar;

    dial(peerInfo: PeerInfo | import("peer-id") | Multiaddr.Multiaddr | string, options?: Object): Promise<LibP2pConnection | {stream: Object; protocol: string}>;
    dialProtocol(peerInfo: PeerInfo | import("peer-id") | Multiaddr.Multiaddr | string, protocols: string[] | string, options?: Object): Promise<LibP2pConnection | {stream: Object; protocol: string}>;
    hangUp(peerInfo: PeerInfo | import("peer-id") | Multiaddr.Multiaddr | string): Promise<void>;
    handle(protocols: string[] | string, handler: (conn: LibP2pConnection, stream: Object, protocol: string) => any): void;
    unhandle(protocols: string[] | string): void;
    isStarted(): boolean;
    on(event: LibP2p.Events, cb: (event: any) => any): this;
    once(event: LibP2p.Events, cb: (event: any) => any): this;
    removeListener(event: LibP2p.Events, cb: (event: any) => any): this;
    ping(peerInfo: PeerInfo | import("peer-id") | Multiaddr.Multiaddr | string): Promise<void>;
    start(): Promise<void>;
    stop(): Promise<void>;
}

declare module 'libp2p' {
    export default LibP2p;
}
