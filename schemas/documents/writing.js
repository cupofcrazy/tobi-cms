import { FcNews } from 'react-icons/fc'
import Tabs from 'sanity-plugin-tabs'

export default {
  name: 'post',
  title: 'Writings',
  type: 'document',
  icon: FcNews,
  fields: [
    {
      name: 'content',
      type: 'object',
      inputComponent: Tabs,
      fieldsets: [
        { name: 'main', title: 'Main', options: { sortOrder: 10} },
        { name: 'content', title: 'Content', options: { sortOrder: 20} },
        { name: 'analytics', title: 'Analytics', options: { sortOrder: 30} },
      ],
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'The title of the post',
          fieldset: 'main'
        },
        {
          name: 'excerpt',
          title: 'Excerpt',
          type: 'string',
          description: 'The excerpt of the post',
          fieldset: 'main'
        },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          description: 'The slug of the post',
          options: {
            source: 'content.title',
            maxLength: 96,
          },
          fieldset: 'content'
        },
        {
          name: 'publishedAt',
          title: 'Published at',
          type: 'datetime',
          description: 'The date and time when the post was published',
          fieldset: 'main'
        },
        {
          name: 'cover',
          title: 'Cover',
          type: 'image',
          description: 'The cover image of the post',
          fieldset: 'main',
          options: {
            hotspot: true,
          },
        },
      ]
    },
  ],
  preview: {
    select: {
      title: 'content.title',
      subtitle: 'content.excerpt',
      media: 'content.cover'
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle,
        media
      }
    }
  }
}