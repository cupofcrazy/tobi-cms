import { FcInfo } from "react-icons/fc";

export default {
  name: 'info',
  type: 'document',
  icon: FcInfo,
  fields: [
    {
      name: 'title',
      type: 'string',
      description: 'The title of the page',
      validation: Rule => Rule.required(),
    },
    {
      name: 'heading',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'short_bio',
      description: 'Short description / bio',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'color',
      type: 'color',
      description: 'The color of the page',
    },
    {
      name: 'cover',
      type: 'a11yImage',
    },
    {
      name: 'contacts',
      description: 'Reach / Contact list (ex. Mail, Twitter)',
      type: 'array',
      of: [
        {
          type: 'link'
        }
      ]
    },
    {
      name: 'capabilities',
      title: 'Capabilities',
      description: 'Services and capabilities, hobbies',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ]
    },
    {
      name: 'tools',
      title: 'Technologies / Tools',
      description: 'A list of tools and technologies',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ]
    },
    {
      name: 'experiments',
      title: 'Experiments with Code / Design',
      description: 'A list of experiments and code snppets',
      type: 'array',
      of: [
        {
          type: 'link'
        }
      ]
    },
  ]
}