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
