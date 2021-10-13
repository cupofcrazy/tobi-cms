import { FcSettings } from "react-icons/fc";
import Tabs from 'sanity-plugin-tabs'

export default {
  name: 'settings',
  type: 'document',
  icon: FcSettings,
  fields: [
    {
      name: 'content',
      type: 'object',
      inputComponent: Tabs,
      fieldsets: [
        { name: 'main', title: 'Main', options: { sortOrder: 10 } },
        { name: 'social', title: 'Social', options: { sortOrder: 20 } },
        { name: 'analytics', title: 'Analytics', options: { sortOrder: 30 } },
      ],
      fields:[
        {
          name: 'name',
          type: 'string',
          title: 'Header / Name',
          fieldset: 'main',
          validation: Rule => Rule.required()
        },
        {
          name: 'profession',
          type: 'string',
          title: 'Profession',
          fieldset: 'main',
          validation: Rule => Rule.required()
        },
        {
          name: 'location',
          type: 'string',
          title: 'Current Location',
          fieldset: 'main',
          validation: Rule => Rule.required()
        },
        {
          name: 'socials',
          type: 'array',
          title: 'Header / Footer Links',
          of: [
            { type: 'link' },
          ],
          fieldset: 'social',
        },
        {
          name: 'mainColor',
          type: 'color',
          title: 'Main Color of the Site',
          fieldset: 'analytics',
          validation: Rule => Rule.required()
        },
        {
          name: 'accentColor',
          type: 'color',
          title: 'Accent Color of the Site',
          fieldset: 'analytics',
          validation: Rule => Rule.required()
        },
        {
          name: 'secondaryColor',
          type: 'color',
          title: 'Secondary Color of the Site',
          fieldset: 'analytics',
          validation: Rule => Rule.required()
        }
      ]
    },
  ],
  preview: {
    select: {
      title: 'content.title',
      media: 'content.socials.0.image',
    },
  }
}