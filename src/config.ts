import type { MarkdownInstance } from 'astro'
import type { CollectionEntry } from 'astro:content'

export type Frontmatter = CollectionEntry<'blog'>['data']

export interface TagType {
  tag: string
  count: number
  pages: CollectionEntry<'blog'>[]
}

export const SiteMetadata = {
  title: 'Customer Operations Consultants',
  description: 'Helping B2B companies with complex technical onboarding and support processes to scale their customer operations',
  author: {
    name: 'Mariena Quintanilla',
    twitter: '',
    url: 'https://www.customeroperationsconsultants.com',
    email: 'mailto:web@customeroperationsconsultants.com',
    summary: 'Customer Operations Leader',
  },
  org: {
    name: 'Customer Operations Consultants',
    twitter: '',
    url: 'https://www.customeroperationsconsultants.com',
    email: 'mailto:info@customeroperationsconsultants.com',
    summary:
      'Customer Operations Consultants is a management consulting firm that specializes in organizational development, customer onboarding, customer support and integrations.  We prioritize customer experience but deliver solutions that help organizations scale their business',
  },
  location: 'Los Angeles, CA',
  latlng: [34.02060,-118.74137] as [number, number],
  repository: 'https://github.com/hellotham/hello-astro',
  social: [
    {
      name: 'Email',
      link: 'info@customeroperationsconsultants.com',
      icon: 'envelope',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/mariena',
      icon: 'linkedin',
    },
    {
      name: 'Schedule a call',
      link: 'https://customeroperationsconsultants.hbportal.co/schedule/6467d06d0d20ae1827edcd8d',
      icon: 'calendar'
    }
  ],
  buildTime: new Date(),
}

export const Logo = '../images/customcolor_icon_transparent_background.svg'
export const LogoImage = '../images/base_icon_transparent_background.png'
export const FeaturedSVG = '../images/svg/undraw/undraw_team_collaboration_re_ow29.svg'
export const DefaultSVG = '../images/svg/undraw/undraw_my_feed.svg'
export const DefaultImage = '../images/undraw/undraw_my_feed.png'
export const cac_logo = '../images/base_icon_transparent_background.png'

export const NavigationLinks = [
  { name: 'Home', href: '' },
  { name: 'About', href: 'about' },
  { name: 'Services', href: 'services' },
  { name: 'Blog', href: 'blog' },
  { name: 'Resources', href: 'resources' },
  { name: 'Contact', href: 'contact' },
]

export const CategoryDetail = [
  {
    category: 'instructions',
    coverSVG: '../images/svg/undraw/undraw_team_collaboration_re_ow29.svg',
    socialImage: '../images/undraw/undraw_instruction_manual.png',
    description: 'Guidelines on using this starter.'
  },
  {
    category: 'information',
    coverSVG: '../images/svg/undraw/undraw_team_collaboration_re_ow29.svg',
    socialImage: '../images/undraw/undraw_instant_information.png',
    description: 'Information articles.'
  },
]

export function categoryDetail(category: string | undefined) {
  const details = CategoryDetail.filter(cat => cat.category == category)

  if (details.length == 1) {
    return details[0]
  }
  return {
    category: 'General',
    coverSVG: '../images/svg/undraw/undraw_instant_information.svg',
    socialImage: '../images/undraw/undraw_instant_information.png',
    description: 'Category ' + category,
  }
}
export const AuthorDetail = [
  {
    name: 'Mariena Quintanilla',
    description: 'Hello World',
    contact: 'chris@christham.net',
    image: '../images/authors/Chris Tham.jpg'
  }
]

export const DefaultAuthor = {
  name: 'Hello Astro',
  image: '../images/authors/default.png',
  contact: 'info@hellotham.com',
  description: 'Astronaut'
}

export function authorDetail(author: string | undefined) {
  const details = AuthorDetail.filter(person => person.name == author)

  if (details.length == 1) {
    return details[0]
  }
  return DefaultAuthor
}

export const PAGE_SIZE = 6

export const GITHUB_EDIT_URL = `https://github.com/hellotham/hello-astro`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

export type Sidebar = Record<string, { text: string; link: string }[]>

export const SIDEBAR: Sidebar = {
  'Section Header': [
    { text: 'Introduction', link: 'doc/introduction' },
    { text: 'Page 2', link: 'doc/page-2' },
    { text: 'Page 3', link: 'doc/page-3' },
  ],
  'Another Section': [{ text: 'Page 4', link: 'doc/page-4' }],
}
