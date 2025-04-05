import argparse
import pandas as pd
from pathlib import Path
from dataclasses import dataclass
from typing import Literal
from pydantic import BaseModel, Field, HttpUrl
from datetime import date

DEFAULT_CHARSET = "UTF-8"


jsonld_site_template = """
<script type="application/ld+json">
{
  "@context": "{{ data.context }}",
  "@type": "{{ data.type_ }}",
  "name": "{{ data.site_name }}",
  "url": " {{ data.site_url }}",
  "description": " {{ data.description }}",
  "publisher": {
    "@type": "Organization",
    "name": "{{ data.author_name }}",
    "logo": {
      "@type": "ImageObject",
      "url": "{{ data.logo_url }}"
    }
  },
  "image": "{{ data.image_url }}",
  "inLanguage": "{{ data.language }}"
}
</script>
"""

jsonld_page_template = """
<script type="application/ld+json">
{
  "@context": "{{ data.context }}",
  "@type": "{{ data.type_ }}",
  "mainEntity": {
    "@type": "Article",
    "headline": "{{ data.headline }}",
    "description": "{{ data.description }}",
    "author": {
      "@type": "Person",
      "name": "{{ data.author_name }}"
    },
    "publisher": {
      "@type": "Organization",
      "name": "{{ data.publisher_name }}",
      "logo": {
        "@type": "ImageObject",
        "url": "{{ data.logo_url }}"
      }
    },
    "image": "{{ data.image_url }}",
    "datePublished": "{{ data.date_published.isoformat() }}",
    "url": "{{ data.page_url }}",
    "inLanguage": "{{ data.language }}"
  }
}
</script>
"""

template = """
<!DOCTYPE html> 
<html lang="{{ site.language }}">
<head>
    <!-- Character space -->
    <meta charset={{ site.charset }}>

    <!-- Visualization on mobile devices -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- The page meta title -->
	<title>{{ site.page.meta.title }}</title>

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="{{ site.page.meta.og.title }}" />
    <meta property="og:description" content="{{ site.page.meta.og.description }}" />
    <meta property="og:type" content="{{ site.page.meta.og.type }}" />
    <meta property="og:url" content="{{ site.page.meta.og.url }}" />
    <meta property="og:image" content="{{ site.page.meta.og.image }}" />
    <meta property="og:image:width" content="{{ site.page.meta.og.image_width }}" />
	<meta property="og:image:type" content="{{ site.page.meta.og.image_type }} ">
    <meta property="og:image:height" content="{{ site.page.meta.og.image_height }}" />
    <meta property="og:locale" content="{{ site.page.meta.og.locale }}" />
    <meta property="og:site_name" content="{{ site.page.meta.og.site_name }}" />

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="{{ site.page.meta.og.twitter_card }}" />
    <meta name="twitter:title" content="{{ site.page.meta.og.title }}" />
    <meta name="twitter:description" content="{{ site.page.meta.og.description }}" />
    <meta name="twitter:image" content="{{ site.page.meta.og.image }}" />

    <!-- Useful for SEO -->
	<meta name="description" content="{{ site.page.meta.og.description }}" />
	
    <!-- Standard for setting the favicon -->
	<link rel="icon" href="{{ site.favicon.url }}" title="{{ site.favicon.title }}" type="image/png" type="image/ico" >
	
    <!-- Preferred version of the URL -->
	<link rel="canonical" href="{{ site.page.url }}" />
	
    <!-- Tells bots to index the site.page.and follow links (that is the default) -->
	<meta name="robots" content="index,follow">
	
    <!-- The JSON-LD structured data -->
    {{ site.page.jsonld_template.render() }}

    <!-- Load the CSS file -->
	<link rel="stylesheet" type="text/css" href="{{ site.page.css }}">
</head>
<body>
	<header>{{ site.page.body.header.render() }} </header>
	<main>{{ site.page.body.main.render() }}</main>
	<footer>{{ site.page.body.footer.render() }}</footer> 
</body>
</html>
"""


class OpenGraphMeta(BaseModel):
    title: str = "Federico's Signal Processing Toolkit"
    description: str = "A deep dive into dynamic systems, oscillations, and multilingual model evaluations."
    type: str = "website"
    url: HttpUrl = "https://federico.dev/projects/signal-toolkit"
    image: HttpUrl = "https://federico.dev/assets/og/signal-toolkit-preview.png"
    image_width: int = 1200
    image_height: int = 630
    image_type: str = "image/png"
    locale: str = "en_US"
    site_name: str = "Federico's Lab"
    twitter_card: str = "summary_large_image"


class StructuredData(BaseModel):
    context: str = "https://schema.org"
    type_: Literal["WebPage", "WebSite"] = (
        "WebPage"  # or website for the website template
    )
    headline: str = "Federico's Signal Processing Toolkit"
    description: str = "A deep dive into dynamic systems, oscillations, and multilingual model evaluations."
    author_name: str = "Federico"
    publisher_name: str = "Federico's Lab"
    logo_url: HttpUrl = "https://federico.dev/assets/logo.png"
    image_url: HttpUrl = "https://federico.dev/assets/og/signal-toolkit-preview.png"
    page_url: HttpUrl = "https://federico.dev/projects/signal-toolkit"
    site_url: HttpUrl = "https://federico.dev"  # for the website template
    site_name: str = "Federico's site"  # for the website template
    date_published: date = date.today()
    language: str = "en"


class Meta(BaseModel):
    title: str = "Fede Cámara Halac [fdch~ ]"
    og: OpenGraphMeta = Field(default_factory=OpenGraphMeta)


class Page(BaseModel):
    meta: Meta = Field(default_factory=Meta)
    jsonld_template: StructuredData = Field(default_factory=StructuredData)


class Favicon(BaseModel):
    url: HttpUrl = "https://federico.dev/assets/favicon.png"
    title: str = "Federico's Lab Icon"


class Site(BaseModel):
    language: str = "en"
    charset: str = DEFAULT_CHARSET
    favicon: Favicon = Field(default_factory=Favicon)


def main():
    """Generate the thing."""
    parser = argparse.ArgumentParser(description="Generate a web page from CSV data.")
    parser.add_argument("csv_file", help="Path to the CSV file.")
    data = pd.read_csv(Path("data.csv"))
    data["pages"] = data.apply(generate_page)
    data.pages.to_html("output.html", escape=False, index=False)


if __name__ == "__main__":
    main()
