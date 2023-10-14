const schema = {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "picture",
      title: "Picture",
      type: "image",
      validation: (Rule: any) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: "content",
      title: "Content",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "position",
      title: "Position",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "orderRank",
      title: "Order Rank",
      type: "string",
    },
  ],
};

export default schema;
