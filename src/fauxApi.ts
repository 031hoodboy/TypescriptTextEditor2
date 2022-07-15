import { ContentAst } from "./TextEditor";

export const exampleContents: Record<string, ContentAst> = {
  c1: [], // empty
  c2: [],
  c3: [
    {
      type: "p",
      children: [
        {
          text: "This is a simple paragraph with ",
        },
        {
          text: "modified",
          bold: true,
          code: true,
        },
        {
          text: " and ",
        },
        {
          text: "marked",
          bold: true,
          underline: true,
        },
        {
          text: " text.",
        },
      ],
    },
  ],
  c4: [
    {
      type: "ol",
      children: [
        {
          type: "li",
          children: [
            {
              text: "first",
            },
          ],
        },
        {
          type: "li",
          children: [
            {
              text: "second",
              bold: true,
            },
          ],
        },
      ],
    },
  ], // everything
  c5: [
    {
      type: "h1",
      align: "center",
      children: [
        {
          text: "Test",
        },
      ],
    },
    {
      type: "p",
      children: [
        {
          text: "this is sample text",
        },
      ],
    },
    {
      type: "p",
      children: [
        {
          text: "bold",
          bold: true,
        },
      ],
    },
    {
      type: "p",
      children: [
        {
          text: "italic",
          italic: true,
        },
      ],
    },
    {
      type: "p",
      children: [
        {
          text: "both",
          bold: true,
          italic: true,
          underline: true,
        },
      ],
    },
    {
      type: "p",
      align: "left",
      children: [
        {
          bold: true,
          italic: true,
          underline: true,
          text: "",
        },
      ],
    },
    {
      type: "p",
      children: [
        {
          bold: true,
          italic: true,
          underline: true,
          text: "underline",
        },
      ],
    },
  ],
};
