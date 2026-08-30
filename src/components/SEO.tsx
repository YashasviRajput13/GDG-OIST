import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  image?: string;
  url?: string;
}

export const SEO = ({
  title = "GDG OIST Bhopal",
  description = "Official GDG OIST Bhopal Developer Community Website",
  type = "website",
  image = "/banner.jpg",
  url = "https://gdg-oist.com"
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
