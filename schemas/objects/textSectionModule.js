export default {
  title: 'Text Section',
  name: 'textSectionModule',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Body',
      name: 'body',
      type: 'text',
      validation: Rule => Rule.required()
    }
  ],
}