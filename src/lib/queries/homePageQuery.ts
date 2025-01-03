// lib/queries.ts
export const homePageQuery = `
  *[_type == "homePage"][0] {
    title,
    heroSection {
      heading,
      subHeading,
      ctaButton,
      ctaLink,
      image
    },
    topQuoteSection->{
      quoteText,
      author
    },
    featuredPackages {
      eyebrow,
      heading,
      packages[]->{
        name,
        description,
        duration,
        images,
        slug,
        "firstGroup": groups[0] {
          standardPricing,
          pricingType,
          standardInclusions
        }
      }
    },
    achievements {
      heading,
      body,
    "video": { "url": video.asset->url },
      stats[] {
        label,
        value
      }
    },
    experienceShowcase {
      heading,
      subheading,
      "gallery": gallery[]
    },
    experienceFeatures {
      heading,
      subheading,
      images,
      features[] {
        icon,
        title,
        body
      }
    },
    testimonials {
      heading,
      subheading,
      testimonialsList[]->{
        name,
        location,
        review
      }
    },
    bottomQuoteSection->{
      quoteText,
      author
    }
  }
`