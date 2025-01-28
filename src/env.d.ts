interface ImportMetaEnv {
    readonly ACKEE_SERVER: string;
    readonly ACKEE_DOMAIN_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}