import { IoTextSharp } from 'react-icons/io'

export default {
  name: "textModule",
  type: "object",
  title: "Text Module",
  icon: IoTextSharp,
  fields: [{ name: "text", type: "text" }],
  preview: {
    select: {
      title: "text"
    },
  }
};
