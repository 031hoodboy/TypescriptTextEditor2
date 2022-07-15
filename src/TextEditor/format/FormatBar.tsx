import React, { memo } from "react";

import { IconList } from "../../ui";
import { FormatIcon } from "./FormatIcon";
import { FORMAT_CONFIGS } from "./constants";

type Props = {
  formats: any;
};

export const FormatBar = memo((props: Props) => {
  const { formats } = props;
  return (
    <IconList>
      {formats.map((format: any) => (
        <FormatIcon key={format} format={format} {...FORMAT_CONFIGS[format]} />
      ))}
    </IconList>
  );
});
