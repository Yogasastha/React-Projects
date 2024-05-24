import React from 'react';
import Condition from './Condition';
const Content = ({ items, handleChange, changeDelete }) => {
  return (
    <main className="Contents">
      {
        (items.length) ? (<Condition items={items} changeDelete={changeDelete} handleChange={handleChange} />)
          : (<p className="clearState">Today You Done All Activity Quickly</p>)
      }
    </main>
  );
};

export default Content;
