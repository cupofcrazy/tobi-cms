import { FcFile } from "react-icons/fc";
import Tabs from 'sanity-plugin-tabs'

export default {
  name: 'project',
  title: 'Projects',
  description: 'Create a new project',
  type: 'document',
  icon: FcFile,
  fields: [
    {
      name: 'content',
      type: 'object',
      inputComponent: Tabs,
      fieldsets: [
        { name: 'main', title: 'Main', options: { sortOrder: 10 }},
        { name: 'details', title: 'Details', options: { sortOrder: 20 }},
        { name: 'other', title: 'Other', options: { sortOrder: 20 }}
      ],
      fields: [
        {
          name: 'title',
          type: 'string',
          description: 'The title of the project',
          validation: Rule => Rule.required(),
          fieldset: 'main'
        },
        {
          name: 'theme',
          type: 'object',
          description: 'Project Colors',
          fields: [
            { name: 'main', title: 'Main Color', type: 'color' },
            { name: 'accent', title: 'Accent Color', type: 'color' }
          ],
          fieldset: 'main'
        },
        {
          name: 'subtitle',
          type: 'text',
          description: 'The subtitle of the project',
          validation: Rule => Rule.required(),
          fieldset: 'main'
        },
        {
          name: 'slug',
          type: 'slug',
          description: 'The slug / unique id of the project (from project title)',
          options: {
            source: 'content.title'
          },
          validation: Rule => Rule.required(),
          fieldset: 'main'
        },
        {
          name: 'color',
          type: 'color',
          description: 'The color / theme of the project (preferably light vibrant for suitable contrast)',
          validation: Rule => Rule.required(),
          fieldset: 'main'
        },
        {
          name: 'created_at',
          type: 'datetime',
          description: 'The date the project was created',
          validation: Rule => Rule.required(),
          fieldset: 'main'
        },
        {
          name: 'description',
          type: 'text',
          description: 'A short description of the project (also for SE0)',
          validation: Rule => Rule.required(),
          fieldset: 'main'
        },
        {
          name: 'modules',
          type: 'array',
          of: [
            { type: 'textModule' },
            { type: 'alignedImage' },
            { type: 'doubleImage' },
            {
              type: 'object',
              name: 'videoModule',
              fields: [
                { name: 'file', type: 'file' }
              ]
            }
          ]
        },
        {
          name: 'url',
          type: 'url',
          description: 'The url of the project (also for SE0)',
          validation: Rule => Rule.required(),
          fieldset: 'main'
        },
        {
          name: 'cover',
          type: 'a11yImage',
          fieldset: 'main'
        },
        {
          name: 'details',
          type: 'array',
          description: 'The details of the project',
          of: [{type: 'text'}],
          fieldset: 'details'
        },
        {
          title: 'Tags',
          name: 'tags',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            list: [
              {title: 'Front End Development', value: 'Front End Development'},
              {title: 'UI Design', value: 'UI Design'},
              {title: 'Graphic Design', value: 'Graphic Design'},
            ]
          },
          fieldset: 'details'
        }
      ],
    }
  ],
  preview: {
    select: {
      title: 'content.title',
      subtitle: 'content.slug',
      media: 'content.cover'
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title,
        subtitle: `/projects/${subtitle.current}`,
        media: media.image
      };
    },
  }
}