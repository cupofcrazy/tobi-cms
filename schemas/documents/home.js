import { FcHome } from 'react-icons/fc'
import Tabs from 'sanity-plugin-tabs'

export default {
  name: 'home',
  type: 'document',
  icon: FcHome,
  fields: [
    {
      name: 'content',
      type: 'object',
      inputComponent: Tabs,
      fieldsets: [
        { name: 'main', title: 'Main / Seo', options: { sortOrder: 10 } },
        { name: 'details', title: 'Details', options: { sortOrder: 20 } },
        { name: 'other', title: 'other', options: { sortOrder: 30 } }
      ],
      fields: [
        {
          name: 'seo',
          type: 'seo',
          fieldset: 'main'
        },
        {
          name: 'bio',
          description: 'Short personal bio (max: 100 characters)',
          type: 'string',
          validation: Rule => Rule.required(),
          fieldset: 'details'
        },
        {
          name: 'color',
          type: 'color',
          description: 'The color / theme of the project (preferably light vibrant for suitable contrast)',
          validation: Rule => Rule.required(),
          fieldset: 'details'
        },
      ]
    },
  ],
  preview: {
    select: {
      title: 'content.seo.title',
      subtitle: 'content.bio'
    }
  }
}