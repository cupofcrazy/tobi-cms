export default {
  name: 'doubleImage',
  type: 'object',
  description: 'A double image module',
  fields: [
    {
      name: 'image1',
      type: 'image',
    },
    {
      name: 'image2',
      type: 'image',
    },
    {
      name: 'alt',
      type: 'string',
      description: 'The alt text for the images',
    },
  ],
};
