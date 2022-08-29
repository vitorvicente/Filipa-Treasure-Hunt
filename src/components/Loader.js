import React from "react";
import PropTypes from "prop-types";

import { Spinner, Wrapper } from "../assets/Styles";

const Loader = ({ opacity }) => ( <Wrapper opacity={ opacity }>
  <Spinner />
</Wrapper> );

Loader.propTypes = {
  opacity: PropTypes.number,
};

Loader.defaultProps = {
  opacity: 1,
};

export default Loader;