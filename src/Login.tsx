import React from 'react';
import { Appbar, Button, Searchbar } from 'framework7-react';

export default ({ name }) => (
  <Appbar>
    <div className="left">{name}</div>
    <div className="right">right</div>
  </Appbar>
);
