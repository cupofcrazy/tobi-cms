import { FcSettings } from "react-icons/fc";

export default {
  name: 'settings',
  type: 'document',
  icon: FcSettings,
  fields: [
    {
      name: 'title',
      type: 'string',
      description: 'The title of the project',
      validation: Rule => Rule.required(),
    },
  ]
}