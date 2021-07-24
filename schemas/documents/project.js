import { FcBriefcase } from "react-icons/fc";

export default {
  name: 'project',
  type: 'document',
  icon: FcBriefcase,
  fields: [
    {
      name: 'title',
      type: 'string',
      description: 'The title of the project',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      description: 'The slug / unique id of the project (from project title)',
      options: {
        source: 'title'
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'color',
      type: 'color',
      description: 'The color / theme of the project (preferably light vibrant for suitable contrast)',
      validation: Rule => Rule.required(),
    },
    {
      name: 'created_at',
      type: 'datetime',
      description: 'The date the project was created',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      description: 'A short description of the project (also for SE0)',
      validation: Rule => Rule.required(),
    },
    {
      name: 'cover',
      type: 'a11yImage',
    },
    {
      name: 'images',
      type: 'array',
      description: 'Images for the project',
      of: [
        { 
          type: 'a11yImage'
        },
      ],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Front End Development', value: 'front-end'},
          {title: 'UI Design', value: 'ui-design'},
          {title: 'Graphic Design', value: 'graphic-design'},
        ]
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug',
      media: 'cover'
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