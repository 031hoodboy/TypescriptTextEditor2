import React from "react";

import { MentionComponent } from "../mention";

const components = {
  blockquote: "blockquote",
  h1: "h1",
  h2: "h2",
  li: "li",
  ol: "ol",
  p: "p",
  pre: "pre",
  ul: "ul",
  mention: MentionComponent,
};

type Props = {
  attributes: any;
  children: any;
  element: any;
};

export const Element = (props: Props) => {
  const { attributes, children, element } = props;
  const style = { textAlign: element.align };
  const ComponentType = components[element.type] || components.p;

  return (
    <ComponentType {...attributes} element={element} style={style}>
      {children}
    </ComponentType>
  );
};
