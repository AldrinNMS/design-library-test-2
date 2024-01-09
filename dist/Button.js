

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NMSButton = void 0;
var _material = require("@mui/material");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const NMSButton = _ref => {
  let {
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_material.Button, props, "Button");
};
exports.NMSButton = NMSButton;