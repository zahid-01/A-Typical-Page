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

  console.log('THIS', props.isValid);
  return (
    <Fragment>
      <div
        className={`${classes.control} ${
          props.isValid === false ? classes.invalid : ''
        }`}
      >
        <label htmlFor={props.id}>{props.label}</label>
        <input
          ref={inpRef}
          type={props.type}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.blurr}
        />
      </div>
    </Fragment>
  );
});

export default UserInput;
