const path = require('path')

const tldrawPackages = [
    '@tldraw/utils',
    '@tldraw/state',
    '@tldraw/state-react',
    '@tldraw/store',
    '@tldraw/validate',
    '@tldraw/tlschema',
    '@tldraw/editor',
    '@tldraw/sync-core',
    '@tldraw/sync',
    'tldraw',
]

const tldrawAliases = Object.fromEntries(
    tldrawPackages.map(( pkg ) => [pkg, path.resolve(__dirname, `node_modules/${pkg}`)]),
)
const tldrawTurboAliases = Object.fromEntries(
    tldrawPackages.map(( pkg ) => [pkg, `./node_modules/${pkg}`]),
)

/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: {
        resolveAlias: tldrawTurboAliases,
    },
    webpack: ( config ) => {
        config.resolve = config.resolve || {}
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            ...tldrawAliases,
        }
        return config
    },
    allowedDevOrigins: [
        '192.168.178.139',
        '192.168.178.0/24',
    ],
}

module.exports = nextConfig
