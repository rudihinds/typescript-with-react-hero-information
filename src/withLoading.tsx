import React from 'react';

const withLoading = (WrappedComponent: any) => {
  return (props:any) => {
    const { hero, restProps } = props
    console.log('hero', hero);
    return <WrappedComponent hero={hero}/>
  }
}

export default withLoading;