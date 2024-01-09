import React from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

export const NMSButton = ({
  children,
  classes,
  color,
  component,
  disabled,
  disableElevation,
  disableFocusRipple,
  disableRipple,
  fullWidth,
  href,
  size,
  startIcon,
  endIcon,
  sx,
  variant,
}) => {
  return (
    <Button
      classes={classes}
      color={color}
      component={component}
      endIcon={endIcon}
      href={href}
      size={size}
      startIcon={startIcon}
      sx={sx}
      variant={variant}
    >
      {children}
    </Button>
  );
};

NMSButton.propTypes = {
  children: PropTypes.node.isRequired,
};

NMSButton.defaultProps = {
  children: 'NMS Button'
}