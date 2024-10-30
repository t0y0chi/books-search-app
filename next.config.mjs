/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'books.google.com',
      },
      {
        protocol: 'https',
        hostname: 'books.google.com',
      },
    ],
  },
  // Vercelへのデプロイ時の設定
  typescript: {
    // ビルド時の型チェックをスキップ（オプション）
    ignoreBuildErrors: true,
  },
  eslint: {
    // ビルド時のESLintチェックをスキップ（オプション）
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
