import React from 'react';
import {useStyle} from './style';

export default function Button() {
    const style = useStyle();
  return (
    <button className={style.button}>Button</button>
  )
}
