import React from "react";

import { Icon, Layout, Tooltip } from "../../ui";

type Props = {
  onPost: any;
};

export const ActionsBar = (props: Props) => {
  const { onPost } = props;
  return (
    <Layout align="center" justify="space-between" spacing={2}>
      <div>
        <Tooltip tooltip="Send message">
          <button onClick={onPost}>Post</button>
        </Tooltip>
      </div>
    </Layout>
  );
};
