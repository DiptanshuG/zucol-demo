import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      {children}
    </div>
  );
};

export default Container;