import React, { memo, useCallback, useState } from "react";
import { Slate, Editable } from "slate-react";
import styled from "styled-components";
import { Layout } from "../ui";
import { ActionsBar } from "./actions";
import { Element, Leaf, editor } from "./editor";
import { FormatBar, handleFormatHotkey, useToggleFormat } from "./format";
import { ContentAst } from "./types";
import { Rnd } from "react-rnd";
import { v4 as uuidv4 } from "uuid";

/**
 * TODOs
 * - [HARD] support multiple mentions and triggers e.g. `@` (user), `#` (field), `:` (emoji)
 * - [HARD] update component signatures to use use `Option`-based interface and async `mentionResolvers`
 * - add types
 * - productionize
 */
type Props = {
  formats: any;
  value: any;
  onChange: any;
  onPost: any;
};

export const TextEditor = memo((props: Props) => {
  const { formats = [], value, onChange, onPost } = props;
  const renderElement = useCallback(Element, []);
  const renderLeaf = useCallback(Leaf, []);
  const [enableFormat, toggleFormat] = useToggleFormat(formats);
  const [texts, setTexts] = useState([]);
  const [texboxId, setTextboxId] = useState();

  const onCreateText = () => {
    console.log("텍스트 블록이 추가되었습니다.");
    setTexts([uuidv4(), ...texts]);
  };

  const getTextboxid = (e: { currentTarget: { id: any } }) => {
    const textboxid = e.currentTarget.id;
    setTextboxId(textboxid);
    console.log(e.currentTarget.id);
  };

  return (
    <Slate editor={editor} value={coerce(value)} onChange={onChange}>
      <AddBlock onClick={onCreateText}>Add Text Block</AddBlock>
      <Layout
        border="border"
        borderRadius="m"
        direction="column"
        p={2}
        spacing={2}
      >
        {enableFormat && <FormatBar formats={formats} />}
      </Layout>
      {texts.map((text) => (
        <>
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder="Enter some rich text…"
            spellCheck
            autoFocus
            onKeyDown={handleFormatHotkey(editor)}
            id={text}
            key={text}
            onClick={getTextboxid}
          />
          {text}
        </>
      ))}

      <ActionsBar onPost={onPost} />
    </Slate>
  );
});

/**
 * Initializes a node if AST is empty, returns the provided AST otherwise.
 */
export const coerce = (ast: ContentAst): ContentAst => {
  if (ast.length === 0) {
    return [
      {
        type: "p",
        children: [
          {
            text: "",
          },
        ],
      },
    ];
  } else {
    return ast;
  }
};

const AddBlock = styled.div`
  width: 200px;
  padding: 10px;
  background-color: #5e09dc;
  cursor: pointer;
  margin: 10px 0pxs;
  font-size: 12px;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin: 10px;

  &:active {
    transform: scale(0.97);
  }
`;
