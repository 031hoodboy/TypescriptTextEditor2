import React from "react";
import { useSlate } from "slate-react";

import { Icon } from "../../ui";
import { testIsFormatActive, toggleFormat } from "./utils";

type Props = {
  icon: any;
  format: any;
  tooltip: any;
  type: string;
};

export const FormatIcon = (props: Props) => {
  const { icon, format, tooltip, type = "mark" } = props;
  const editor = useSlate();

  const isActive = testIsFormatActive(editor, format, type);

  const handleClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    toggleFormat(editor, format, type);
  };

  return (
    <Icon
      icon={icon}
      isActive={isActive}
      tooltip={tooltip}
      onClick={handleClick}
    />
  );
};
