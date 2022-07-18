import React, { memo } from "react";
import "tippy.js/dist/tippy.css";

import Tippy from "@tippyjs/react";

type Props = {
  children: any;
  tooltip: any;
};

export const Tooltip = memo((props: Props) => {
  const { children, tooltip } = props;

  if (!tooltip) {
    return children;
  }

  return (
    <Tippy interactive animation={false} content={tooltip}>
      <span>{children}</span>
    </Tippy>
  );
});
