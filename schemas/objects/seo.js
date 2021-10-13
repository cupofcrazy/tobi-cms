export default {
  name: 'seo',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    }
  ]

}