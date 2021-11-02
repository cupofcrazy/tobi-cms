export default {
  name: "textModule",
  title: "Text Block",
  type: "object",
  fields: [
    {
      name: 'titleExists',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'title',
      type: 'string',
      description: 'Title of the section',
      hidden: ({ parent }) => !parent.titleExists
    },
    {
      name: 'body',
      type: 'text',
      description: 'Body of the section'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'body',
      titleExists: 'titleExists'
    },
    prepare({ title, subtitle, titleExists }) {
      return {
        title: titleExists ? title : 'No Text Section title added!',
        subtitle: subtitle
      }
    }
  }
}
