import React, { Fragment, useRef, useImperativeHandle } from 'react';
import classes from './Form.module.css';

const UserInput = React.forwardRef((props, ref) => {
  const inpRef = useRef();

  const activate = () => {
    inpRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return { activate };
  });

  return (
    <Fragment>
      <div
        className={`${classes.control} ${
          props.value.isValid === false ? classes.invalid : ''
        }`}
      >
        <label htmlFor={props.id}>{props.label}</label>
        <input
          ref={inpRef}
          type={props.type}
          id={props.id}
          value={props.value}
          onChange={props.change}
          onBlur={props.blurr}
        />
      </div>
    </Fragment>
  );
});

export default UserInput;
