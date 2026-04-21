const DEFAULT_SYNC_SERVER_URL = 'http://localhost:5858'

function trimTrailingSlash( url: string ): string {
    return url.replace(/\/+$/, '')
}

export function getSyncServerHttpBaseUrl(): string {
    return trimTrailingSlash(process.env.NEXT_PUBLIC_SYNC_SERVER_URL || DEFAULT_SYNC_SERVER_URL)
}

export function getSyncServerWsBaseUrl(): string {
    const url = new URL(getSyncServerHttpBaseUrl())
    if (url.protocol === 'https:') url.protocol = 'wss:'
    if (url.protocol === 'http:') url.protocol = 'ws:'
    return trimTrailingSlash(url.toString())
}

export function getSyncUrl( roomId: string ): string {
    return `${getSyncServerWsBaseUrl()}/connect/${roomId}`
}
