export default {
  name: "alignedImage",
  title: "Aligned Image",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: 'image',
      options: {
        collapsible: true,
        collapsed: true
      },
    },
    {
      name: "caption",
      type: "string",
      title: "Text",
    },
    {
      name: "position",
      title: "Image Position",
      type: "string",
      options: {
        list: [
          { title: "Align Left", value: "left" },
          { title: "Align Right", value: "right" },
          { title: "Align Center", value: "center" },
          { title: "Full Width", value: "full" },
        ],
        layout: "radio",
      }
    },
  ]
}