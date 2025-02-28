import React from 'react'
import LandingPage from './LandingPage'
import { fn } from '@storybook/test'
import { PhoneIcon, PlayCircleIcon, RectangleGroupIcon } from '@heroicons/react/20/solid'
import { ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon } from '@heroicons/react/24/outline'
import { DynamicIcon } from '@/components/Images'
import { Meta, StoryObj } from '@storybook/react';
import { title } from 'process'

const GithubIcon = () => (
  // <FontAwesomeIcon icon={faGithub} size="10x" />
  <DynamicIcon iconName="github" size="4x" type="brands" />
)
const AWSIcon = () => <DynamicIcon iconName="aws" type="brands" />
const AzureIcon = () => <DynamicIcon iconName="azure" type="kit" />
const SolutionIcon = () => <DynamicIcon iconName="people-sharing" size="4x" type="kit" />

const ServiceIcon = () => <DynamicIcon iconName="cloud-network-sharing" size="4x" type="kit" />

const ProductIcon = () => <DynamicIcon iconName="development" size="4x" type="kit" />
import image1 from '../../.storybook/public/assets/images/about/about-1.png';
import image2 from '../../.storybook/public/assets/images/about/about-2.png';
import image3 from '../../.storybook/public/assets/images/about/about-3.png';
import image4 from '../../.storybook/public/assets/images/about/about-4.png';
import pattern from '../../.storybook/public/assets/images/about/pattern-1.png';
import { FaInstagram, FaLinkedin } from 'react-icons/fa6'
import logoLight from '../../.storybook/public/cortex-reply-light.png'
import logoDark from '../../.storybook/public/cortex-reply-dark.png'

function Icon1() {
  return (
    <svg
      width={30}
      height={41}
      viewBox="0 0 30 41"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M26.25 39.5938H3.75C2.75544 39.5938 1.80161 39.1987 1.09835 38.4954C0.395088 37.7921 0 36.8383 0 35.8438V5.84375C0 4.84919 0.395088 3.89536 1.09835 3.1921C1.80161 2.48884 2.75544 2.09375 3.75 2.09375H26.25C27.2446 2.09375 28.1984 2.48884 28.9017 3.1921C29.6049 3.89536 30 4.84919 30 5.84375V35.8438C30 36.8383 29.6049 37.7921 28.9017 38.4954C28.1984 39.1987 27.2446 39.5938 26.25 39.5938ZM3.75 4.59375C3.41848 4.59375 3.10054 4.72545 2.86612 4.95987C2.6317 5.19429 2.5 5.51223 2.5 5.84375V35.8438C2.5 36.1753 2.6317 36.4932 2.86612 36.7276C3.10054 36.9621 3.41848 37.0938 3.75 37.0938H26.25C26.5815 37.0938 26.8995 36.9621 27.1339 36.7276C27.3683 36.4932 27.5 36.1753 27.5 35.8438V5.84375C27.5 5.51223 27.3683 5.19429 27.1339 4.95987C26.8995 4.72545 26.5815 4.59375 26.25 4.59375H3.75Z" />
      <path d="M11.25 34.5938H8.75C8.41848 34.5938 8.10054 34.4621 7.86612 34.2276C7.6317 33.9932 7.5 33.6753 7.5 33.3438C7.5 33.0122 7.6317 32.6943 7.86612 32.4599C8.10054 32.2254 8.41848 32.0938 8.75 32.0938H11.25C11.5815 32.0938 11.8995 32.2254 12.1339 32.4599C12.3683 32.6943 12.5 33.0122 12.5 33.3438C12.5 33.6753 12.3683 33.9932 12.1339 34.2276C11.8995 34.4621 11.5815 34.5938 11.25 34.5938Z" />
    </svg>
  )
}

function Icon2() {
  return (
    <svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.50125 22.2687V8.34375C7.50125 8.01223 7.36955 7.69429 7.13513 7.45987C6.90071 7.22545 6.58277 7.09375 6.25125 7.09375C5.91973 7.09375 5.60179 7.22545 5.36737 7.45987C5.13295 7.69429 5.00125 8.01223 5.00125 8.34375V22.2687C3.94204 22.5566 3.00698 23.185 2.34033 24.057C1.67369 24.929 1.3125 25.9961 1.3125 27.0938C1.3125 28.1914 1.67369 29.2585 2.34033 30.1305C3.00698 31.0025 3.94204 31.6309 5.00125 31.9188V33.3438C5.00125 33.6753 5.13295 33.9932 5.36737 34.2276C5.60179 34.4621 5.91973 34.5938 6.25125 34.5938C6.58277 34.5938 6.90071 34.4621 7.13513 34.2276C7.36955 33.9932 7.50125 33.6753 7.50125 33.3438V31.9188C8.56046 31.6309 9.49552 31.0025 10.1622 30.1305C10.8288 29.2585 11.19 28.1914 11.19 27.0938C11.19 25.9961 10.8288 24.929 10.1622 24.057C9.49552 23.185 8.56046 22.5566 7.50125 22.2687ZM6.25125 29.5938C5.7568 29.5938 5.27345 29.4471 4.86232 29.1724C4.4512 28.8977 4.13077 28.5073 3.94155 28.0505C3.75233 27.5936 3.70282 27.091 3.79929 26.606C3.89575 26.1211 4.13385 25.6756 4.48348 25.326C4.83311 24.9764 5.27857 24.7382 5.76353 24.6418C6.24848 24.5453 6.75114 24.5948 7.20796 24.784C7.66477 24.9733 8.05522 25.2937 8.32992 25.7048C8.60463 26.1159 8.75125 26.5993 8.75125 27.0938C8.75125 27.7568 8.48786 28.3927 8.01902 28.8615C7.55018 29.3304 6.91429 29.5938 6.25125 29.5938Z" />
      <path d="M38.7513 27.0938C38.7477 25.9881 38.3777 24.9147 37.6991 24.0417C37.0206 23.1687 36.0718 22.5452 35.0013 22.2687V8.34375C35.0013 8.01223 34.8696 7.69429 34.6351 7.45987C34.4007 7.22545 34.0828 7.09375 33.7513 7.09375C33.4197 7.09375 33.1018 7.22545 32.8674 7.45987C32.6329 7.69429 32.5013 8.01223 32.5013 8.34375V22.2687C31.442 22.5566 30.507 23.185 29.8403 24.057C29.1737 24.929 28.8125 25.9961 28.8125 27.0938C28.8125 28.1914 29.1737 29.2585 29.8403 30.1305C30.507 31.0025 31.442 31.6309 32.5013 31.9188V33.3438C32.5013 33.6753 32.6329 33.9932 32.8674 34.2276C33.1018 34.4621 33.4197 34.5938 33.7513 34.5938C34.0828 34.5938 34.4007 34.4621 34.6351 34.2276C34.8696 33.9932 35.0013 33.6753 35.0013 33.3438V31.9188C36.0718 31.6423 37.0206 31.0188 37.6991 30.1458C38.3777 29.2728 38.7477 28.1994 38.7513 27.0938ZM33.7513 29.5938C33.2568 29.5938 32.7734 29.4471 32.3623 29.1724C31.9512 28.8977 31.6308 28.5073 31.4416 28.0505C31.2523 27.5936 31.2028 27.091 31.2993 26.606C31.3957 26.1211 31.6339 25.6756 31.9835 25.326C32.3331 24.9764 32.7786 24.7382 33.2635 24.6418C33.7485 24.5453 34.2511 24.5948 34.708 24.784C35.1648 24.9733 35.5552 25.2937 35.8299 25.7048C36.1046 26.1159 36.2513 26.5993 36.2513 27.0938C36.2513 27.7568 35.9879 28.3927 35.519 28.8615C35.0502 29.3304 34.4143 29.5938 33.7513 29.5938Z" />
      <path d="M21.2513 9.76875V8.34375C21.2513 8.01223 21.1196 7.69429 20.8851 7.45987C20.6507 7.22545 20.3328 7.09375 20.0013 7.09375C19.6697 7.09375 19.3518 7.22545 19.1174 7.45987C18.8829 7.69429 18.7513 8.01223 18.7513 8.34375V9.76875C17.692 10.0566 16.757 10.685 16.0903 11.557C15.4237 12.429 15.0625 13.4961 15.0625 14.5938C15.0625 15.6914 15.4237 16.7585 16.0903 17.6305C16.757 18.5025 17.692 19.1309 18.7513 19.4187V33.3438C18.7513 33.6753 18.8829 33.9932 19.1174 34.2276C19.3518 34.4621 19.6697 34.5938 20.0013 34.5938C20.3328 34.5938 20.6507 34.4621 20.8851 34.2276C21.1196 33.9932 21.2513 33.6753 21.2513 33.3438V19.4187C22.3105 19.1309 23.2455 18.5025 23.9122 17.6305C24.5788 16.7585 24.94 15.6914 24.94 14.5938C24.94 13.4961 24.5788 12.429 23.9122 11.557C23.2455 10.685 22.3105 10.0566 21.2513 9.76875ZM20.0013 17.0938C19.5068 17.0938 19.0234 16.9471 18.6123 16.6724C18.2012 16.3977 17.8808 16.0073 17.6916 15.5505C17.5023 15.0936 17.4528 14.591 17.5493 14.106C17.6457 13.6211 17.8839 13.1756 18.2335 12.826C18.5831 12.4764 19.0286 12.2382 19.5135 12.1418C19.9985 12.0453 20.5011 12.0948 20.958 12.2841C21.4148 12.4733 21.8052 12.7937 22.0799 13.2048C22.3546 13.6159 22.5013 14.0993 22.5013 14.5938C22.5013 15.2568 22.2379 15.8927 21.769 16.3615C21.3002 16.8304 20.6643 17.0938 20.0013 17.0938Z" />
    </svg>
  )
}
export default {
  title: 'Example Pages/LandingPage',
  component: LandingPage,
  decorators: [
    (Story: React.FC) => (
      <div className="bg-sidebar">
        <Story />
      </div>
    ),
  ],
}

const Template = (args: any) => <LandingPage {...args} />


type PageStory = StoryObj<typeof LandingPage>;

export const Default: PageStory = {
  render: Template,
  args: {
    title: 'Storage Service',
    section: 'Storage',
    description:
      'A scalable object storage service that offers industry-leading performance, security, and availability.',
    children: (
      <div className="prose max-w-none">
        <h2>How it works</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <div className="aspect-video overflow-hidden rounded-lg bg-slate-100">
          <div className="flex h-full items-center justify-center">Video Placeholder</div>
        </div>
      </div>
    ),
    header: {
      title: 'Lorem ipsum dolor sit amet',
      subtitle: 'Lorum ipsum dolor sit amet, consectetur adipiscing elit.',
      menuItems: [
        {
          name: 'Documentation',
          items: [
            {
              name: 'Platforms & Services',
              description: 'Cloud services',
              href: '#',
              icon: ServiceIcon, // Pass the component, not <ChartPieIcon />
            },
            {
              name: 'Solutions & Propositions',
              description: 'Solutions that we have built',
              href: '#',
              icon: SolutionIcon,
            },
            {
              name: 'Products',
              description: 'Products that we sell',
              href: '#',
              icon: ProductIcon,
            },
          ],
        },
        {
          name: 'Resources',
          items: [
            { name: 'Documentation', href: '#', icon: ChartPieIcon },
            { name: 'API Reference', href: '#', icon: CursorArrowRaysIcon },
            { name: 'Github', href: '#', icon: GithubIcon },
          ],
          actions: [
            { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
            { name: 'Contact sales', href: '#', icon: PhoneIcon },
            { name: 'View all products', href: '#', icon: RectangleGroupIcon },
          ],
        },
        {
          name: 'Intranet',
          href: '#',
        },
      ],
    },
    services: [
      {
        icon: { type: 'thin', iconName: 'image' },
        title: 'Service Title',
        description: 'This is a description of the service.',
        slug: '/service',
      },
      {
        icon: { type: 'thin', iconName: 'image' },
        title: 'Service Title',
        description: 'This is a description of the service.',
        slug: '/service',
      },
      {
        icon: { type: 'kit', iconName: 'software' },
        title: 'Service Title',
        description: 'This is a description of the service.',
        slug: '/service',
      },
    ],
    about: {
      images: {
        image1: image1,
        image2: image2, 
        image3: image3,
        image4: image4,
        pattern: pattern,
      },
      sectionHeading: {
        subtitle: 'Payload',
        title: 'Payload',
        description: 'Payload',
      },
      keyPoints: [
        {
          icon: <Icon1 />,
          title: 'Cloud Migrate Pro',
        },
        {
          icon: <Icon2 />,
          title: 'AI Forge Labs',
        },
      ],
      // description:
      //   'It is a long established fact that a reader will be distracted by the readablejk content of a page when looking at its layout.',
    },
    contact: {
      sectionHeading: {
        title: 'Get in Touch',
        subtitle: 'We would love to hear from you',
      },
      image: {
        src: '/assets/images/contact.png',
        alt: 'Contact Us',
        blurDataURL: 'data:image/jpeg;base64,...', // Add your blur data URL here
      },
      contactInfo: {
        sectionHeading: {
          title: 'Contact Information',
          subtitle: 'Reach out to us through any of the following methods',
        },
        location: '123 Main Street, Anytown, AT 12345',
        mail: 'info@example.com',
        phone: '+1 (555) 123-4567',
      },
      locations: [
        {
          title: 'Head Office',
          location: '123 Main Street, Anytown, AT 12345',
          mails: ['headoffice@example.com'],
          phoneNumbers: ['+1 (555) 123-4567'],
          embedUrl: 'https://www.google.com/maps/embed?...', // Add your Google Maps embed URL here
        },
        {
          title: 'Branch Office',
          location: '456 Elm Street, Othertown, OT 67890',
          mails: ['branchoffice@example.com'],
          phoneNumbers: ['+1 (555) 987-6543'],
          embedUrl: 'https://www.google.com/maps/embed?...', // Add your Google Maps embed URL here
        },
      ],
    },
    blog: {
      sectionHeading: {
        subtitle: 'Payload',
        title: 'Payload',
        description: 'Payload',
      },
      blogs: [
        {
          slug: '/blog/pioneering-progress',
          image: {
            src: '/assets/images/blog/istockphoto1.jpg',
            alt: 'Pioneering Progress, One Algorithm at a Time',
          },
          authors: [ { name: 'admin with a long name'}, { name: 'demo'}],
          categories: ['Technology', 'Other'],
          publishedAt: '2025-01-01T17:19:41.270Z',
          commentCount: '05',
          title: 'Pioneering Progress, One Algorithm at a Time',
          description:
            'Aliquam eros justo, posuere lobortis non, viverra laoreet augue mattis start fermentum ullamcorper viverra laoreet. By Admin. Technology. 28th February 2022. Leave a comment.',
        },
        {
          slug: '/blog/innovative-solutions',
          image: {
            src: '/assets/images/blog/istockphoto2.jpg',
            alt: 'Innovative Solutions for Modern Problems',
          },
          publishedAt: '2025-01-01T17:19:41.270Z',
          categories: [],
          commentCount: '10',
          title: 'Innovative Solutions for Modern Problems',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. By John Doe. Innovation. 15th March 2022. Leave a comment.',
        },
        {
          slug: '/blog/future-of-tech',
          image: {
            src: '/assets/images/blog/istockphoto3.jpg',
            alt: 'The Future of Technology',
          },
          authors: [ { name: 'admin'}, { name: 'demo'}],
          publishedAt: '2025-01-01T17:19:41.270Z',
          commentCount: '08',
          title: 'The Future of Technology',
          description:
            'Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. By Jane Doe. Future. 22nd April 2022. Leave a comment.',
        },
      ],
    },
    footer: {
      className: '',
      logoLight:logoLight,
      logoDark:logoDark,
      footerData: {
        about: {
          description: 'This is a sample description for the about section.',
          socialLinks: [
            {
              icon: <FaLinkedin />,
              href: 'https://www.linkedin.com/company/cortex-reply/',
            },
            {
              icon: <FaInstagram />,
              href: 'https://www.instagram.com/cortex.reply/',
            },
          ],
        },
        columnOne: {
          title: 'Column One',
          links: [
            { href: '/link1', label: 'Link 1' },
            { href: '/link2', label: 'Link 2' },
          ],
        },
        columnTwo: {
          title: 'Contact Us',
          location: '1234 Street Name, City, Country',
          mails: ['contact@example.com', 'support@example.com'],
        },
        columnThree: {
          title: 'Recent Insights',
          blogs: [
            {
              image: {
                src: '/assets/images/blog/blog-sm-1.jpg',
                alt: 'We provide a range of IT solutions',
              },
              title: 'We provide a range of IT solutions',
              date: '2025-01-02T00:00:00.000Z',
              slug: './blog-details',
            },
            {
              image: {
                src: '/assets/images/blog/blog-sm-2.jpg',
                alt: 'IT solutions enhance efficiency',
              },
              title: 'IT solutions enhance efficiency',
              date: '2025-01-02T00:00:00.000Z',
              slug: './blog-details',
            },
          ],
        },
        footerBottom: {
          copyrightText: 'copyright',
          links: [
            {
              label: 'Privacy Policy',
              href: '/privacy-policy',
              openNewTab: false,
            },
            {
              label: 'Contact Us',
              href: '/contact',
              openNewTab: false,
            },
          ],
        },
      },
    },
  },
}

export const HtmlSubtitle = {
  args: {
    ...Default.args,
    header: {
      title: 'Page Title',
      subtitle: <div><p className="text-xl font-bold">A load of text here</p><br/><p className="text-2xl font-bold">A load more text here</p></div>,
    },
    
  },
}

export const MediumImpactHero = {
  args: {
    ...Default.args,
    hero: {
      type: 'mediumImpact',
      media: 'stock1.jpg?height=400&width=800',
      children: <h1 className="text-4xl font-bold">Medium Impact Hero</h1>,
    },
    heroBackgroundImage: 'stock1.jpg?height=400&width=800',
  },
}

export const HighImpactHero = {
  args: {
    ...Default.args,
    hero: {
      type: 'highImpact',
      children: <h1 className="text-4xl font-bold">High Impact Hero</h1>,
      media: 'stock1.jpg?height=400&width=800',

    },
    heroBackgroundImage: 'stock1.jpg?height=400&width=800',
  },
}


export const PostHero = {
  args: {
    ...Default.args,
    hero: {
      type: 'highImpact',
      children: <h1 className="text-4xl font-bold">Post Hero</h1>,
      media: 'stock1.jpg?height=400&width=800',
    },
    media: 'stock1.jpg?height=400&width=800',
  },
}