import { FcInfo } from "react-icons/fc";
import Tabs from 'sanity-plugin-tabs'

export default {
  name: 'info',
  type: 'document',
  icon: FcInfo,
  fields: [
    {
      name: 'content',
      type: 'object',
      inputComponent: Tabs,
      fieldsets: [
        { name: 'main', title: 'Main', options: { sortOrder: 10 }},
        { name: 'details', title: 'Details', options: { sortOrder: 20 }},
        { name: 'other', title: 'Other', options: { sortOrder: 30 }}
      ],
      fields: [
        {
          name: 'seo',
          type: 'seo',
          description: 'The title of the page',
          validation: Rule => Rule.required(),
          fieldset: 'main'
        },
        {
          name: 'heading',
          type: 'string',
          validation: Rule => Rule.required(),
          fieldset: 'main'
        },
        {
          name: 'short_bio',
          description: 'Short description / bio',
          type: 'text',
          validation: Rule => Rule.required(),
          fieldset: 'main'
        },
        {
          name: 'color',
          type: 'color',
          description: 'The color of the page',
          fieldset: 'details'
        },
        {
          name: 'contacts',
          description: 'Reach / Contact list (ex. Mail, Twitter)',
          type: 'array',
          of: [
            {
              type: 'link'
            }
          ],
          fieldset: 'details'
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
          ],
          fieldset: 'details'
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
          ],
          fieldset: 'details'
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
          ],
          fieldset: 'details'
        },
      ]

    }
  ],
  preview: {
    select: {
      title: 'content.seo.title',
      subtitle: 'content.seo.subtitle',
      media: 'content.seo.image'
    }
  }
}