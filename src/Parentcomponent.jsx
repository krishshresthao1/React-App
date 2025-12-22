import React from 'react'

const Parentcomponent = ({children}) => {
  return (
    <>
      <div>
        <nav>NavBar</nav>
        {children}
        <footer>Footer</footer>
      </div>
    </>
  );
}

export default Parentcomponent