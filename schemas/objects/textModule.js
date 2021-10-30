export default {
  name: "textModule",
  title: "Text Block",
  type: "object",
  fields: [
    {
      name: 'content',
      type: 'array',
      of: [
        {
          name: 'text',
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Quote', value: 'blockquote'}
          ],

        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'content.text'
    }
  }
}
