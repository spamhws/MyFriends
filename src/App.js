import React from 'react';
import CardList from './CardList';
import { friends } from './friends';
import SearchBox from './Searchbox';

const App = () => {
  return (
    <div>
      <h1>My Mega Friends!</h1>
      <SearchBox />
      <CardList friends={friends} />
    </div>
  );
}

export default App;
