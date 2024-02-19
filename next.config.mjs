/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dvd6ljcj7w3pj.cloudfront.net",
        port: "",
        pathname: "/static/**",
      },
      {
        protocol: "https",
        hostname: "prod-testvalley.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/static/**",
      },
    ],
  },
};

export default nextConfig;
