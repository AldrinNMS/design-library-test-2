import React from "react";
import { Button, ThemeProvider, useTheme } from "@mui/material";
import PropTypes from "prop-types";
import { dark, lightTheme } from "../../../theme/myTheme";


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
  isDarkMode
}) => {
  const theme = isDarkMode ? dark : lightTheme;

  return (
    // <ThemeProvider theme={myTheme}>
    <Button
      style={{ color: theme.palette.primary, fontFamily: theme.typography.fontFamily }}
      classes={classes}
      color={color}
      component={component}
      endIcon={endIcon}
      href={href}
      size={size}
      startIcon={startIcon}
      sx={sx}
      variant={variant}
      disabled={disabled}

    >
      {children}
    </Button>
    // </ThemeProvider>



  );
};

NMSButton.propTypes = {
  children: PropTypes.node.isRequired,
};

NMSButton.defaultProps = {
  children: 'NMS Button'
}