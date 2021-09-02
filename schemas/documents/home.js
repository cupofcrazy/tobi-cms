import { FcHome } from 'react-icons/fc'

export default {
  name: 'home',
  type: 'document',
  icon: FcHome,
  fields: [
    {
      name: 'title',
      type: 'string',
      description: 'The title of the page',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      description: 'The meta description of the page',
      validation: Rule => Rule.required()
    },
    {
      name: 'bio',
      description: 'Short personal bio (max: 100 characters)',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'cover',
      description: 'Cover image',
      type: 'image',
      validation: Rule => Rule.required(),
    },
    {
      name: 'color',
      type: 'color',
      description: 'The color / theme of the project (preferably light vibrant for suitable contrast)',
      validation: Rule => Rule.required(),
    },
    {
      name: 'selected_project',
      description: 'The project that is currently selected for the homepage',
      type: 'reference',
      to: [
        {
          type: 'project',
        }
      ]
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'bio'
    }
  }
}