import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  }
};

const sentryWebpackPluginOptions = {
  // Sentry options for the Next.js build
  silent: true, // Suppresses source map uploading logs during build
  org: "cocacola-jk", // Make sure this matches your organization
  project: "javascript-nextjs", // Your project name
  widenClientFileUpload: true, // Upload a larger set of source maps for prettier stack traces (increases build time)
  transpileClientSDK: true, // Transpiles SDK to be compatible with IE11 (increases bundle size)
  hideSourceMaps: true, // Hides source maps from generated client bundles
  disableLogger: true, // Tree-shakes Sentry logger statements to reduce bundle size
  automaticVercelMonitors: true, // Enables automatic instrumentation of Vercel Cron Monitors
};

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
