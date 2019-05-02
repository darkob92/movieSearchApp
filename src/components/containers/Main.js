import React from 'react';

const Main = (props) => {
  return(
    <div style={{
      margin: "6rem auto",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      width: '80%'
    }}>
      {props.children}
    </div>
  );
}

export default Main;