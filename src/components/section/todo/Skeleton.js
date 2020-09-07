import React from "react";
import { ListItem, Avatar } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const Selections = () => (
  <React.Fragment>
    {[1, 2, 3].map((item) => (
      <Skeleton key={item} varient='rect' width='100%'>
        <ListItem>
          <Avatar />
        </ListItem>
      </Skeleton>
    ))}
  </React.Fragment>
);

export default React.memo(Selections);
