import React from "react";
import PropTypes from "prop-types";

import * as S from "./style";

function ButtonLink({ className, href, children }) {
  return (
    <S.Button className={className} href={href}>
      {children}
    </S.Button>
  );
}

ButtonLink.defaultProps = {
  href: "/",
  className: "",
};

ButtonLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ButtonLink;
