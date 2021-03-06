export default {
  name: 'doubleImage',
  type: 'object',
  description: 'A double image module',
  fields: [
    {
      name: 'left',
      type: 'image',
    },
    {
      name: 'right',
      type: 'image',
    },
    {
      name: "caption",
      type: "text",
      title: "Text",
    },
  ],
  preview: {
    select: {
      media: 'left',
    },
    prepare(selection) {
      const { title, media } = selection
      return {
        title,
        media,
      }
    }
  }
};
