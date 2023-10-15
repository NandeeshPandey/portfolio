"use client";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";

const portableTextcomponents: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => {
      // add <br /> for empty strings
      //   if (children?.length === 1 && children[0] === "") {
      //     return <br />;
      //   }
      return <p className="text-gray-500">{children}</p>;
    },
    h4: ({ children }) => (
      <h2 className="text-primary text-lg mt-8 mb-2 font-semibold">
        {children}
      </h2>
    ),
  },
};

interface Props {
  languageData: any;
}

export default function PortableTextWrapper({ languageData }: Props) {
  return (
    <PortableText
      value={languageData.article}
      components={portableTextcomponents}
    />
  );
}
