import React from 'react';
import PropTypes from 'prop-types';

export default function Laugh({ joke, btnText }) {
  return (
    <>
      <h1>{joke.setup}</h1>
      <p>{btnText !== 'Get Punchline' ? joke.punchLine : ''}</p>
      ;
    </>
  );
}

Laugh.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string,
    punchLine: PropTypes.string,
  }).isRequired,
  btnText: PropTypes.string.isRequired,
};
