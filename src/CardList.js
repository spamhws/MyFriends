import React from 'react';
import Card from './Card';

const CardList = ({ friends }) => {
  return (
    <React.Fragment>
      { friends.map((user, i) => {
          return (
            <Card
              key={'Card' + i}
              id={friends[i].id}
              name={friends[i].name}
              email={friends[i].email}
            />
          );
        })
      }
    </React.Fragment>
  );
}

export default CardList;
