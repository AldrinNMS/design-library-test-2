import React, { useState } from "react";
import { Checkbox, ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";
// import { myTheme } from "../../../theme/myTheme";

export const NMSCheckbox = ({
  classes,
  color,
  disabled,
  disableRipple,
  icon,
  inputProps,
  inputRef,
  size,
  sx,

}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    // <ThemeProvider theme={myTheme}>
    <Checkbox
      checked={checked}
      onChange={handleChange}
      classes={classes}
      color={color}
      disabled={disabled}
      disableRipple={disableRipple}
      icon={icon}
      inputProps={inputProps}
      inputRef={inputRef}
      size={size}
      sx={sx}

    />
    // </ThemeProvider>

  );
};

NMSCheckbox.propTypes = {
  classes: PropTypes.object,
  color: PropTypes.oneOf(["default", "primary", "secondary"]),
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
  icon: PropTypes.node,
  indeterminate: PropTypes.bool,
  indeterminateIcon: PropTypes.node,
  inputProps: PropTypes.object,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  size: PropTypes.oneOf(["small", "medium"]),
  sx: PropTypes.object,
};

NMSCheckbox.defaultProps = {
  checked: false,
  color: "primary",
  disabled: false,
  disableRipple: false,
  indeterminate: false,
  size: "medium",
};
