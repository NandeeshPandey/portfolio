const schema = {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "subTitle",
      title: "Sub-Title",
      type: "string",
    },
    {
      name: "metadataDescription",
      title: "Metadata Description",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule: any) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: "article",
      title: "Article",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "orderRank",
      title: "Order Rank",
      type: "string",
    },
  ],
};

export default schema;
