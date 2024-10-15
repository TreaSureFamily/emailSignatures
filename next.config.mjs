/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disable image optimization for static export
    domains: ["treasurefamilyapp.com", "github.com"],
  },
  output: "export",
  basePath: "", // Adjust this if deploying to a subdirectory
};

export default nextConfig;
