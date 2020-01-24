webpackHotUpdatedash_treebeard("main",{

/***/ "./src/lib/components/DashTreebeard.react.js":
/*!***************************************************!*\
  !*** ./src/lib/components/DashTreebeard.react.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_treebeard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-treebeard */ "./node_modules/react-treebeard/index.js");
/* harmony import */ var react_treebeard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_treebeard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultTheme */ "./src/lib/components/defaultTheme.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }






var decorateData = function decorateData(_ref, selected, toggleSet) {
  var key = _ref.key,
      name = _ref.name,
      children = _ref.children;
  return {
    key: key,
    name: name,
    toggled: toggleSet.includes(key),
    active: key == selected,
    children: children && children.map(function (node) {
      return decorateData(node, selected, toggleSet);
    })
  };
};
/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */


var DashTreebeard = function DashTreebeard(_ref2) {
  var id = _ref2.id,
      data = _ref2.data,
      selected = _ref2.selected,
      toggled = _ref2.toggled,
      style = _ref2.style,
      setProps = _ref2.setProps;
  data = data || rootData;
  style = style || _defaultTheme__WEBPACK_IMPORTED_MODULE_3__["default"];
  toggled = toggled || [];

  var onToggle = function onToggle(node, nodeToggled) {
    if (node.children) {
      if (nodeToggled) {
        setProps({
          toggled: [].concat(_toConsumableArray(toggled), [node.key])
        });
      } else {
        setProps({
          toggled: toggled.filter(function (key) {
            return key != node.key;
          })
        });
      }
    } else {
      setProps({
        selected: node.key
      });
    }
  };

  console.log(decorateData(data, selected, toggled));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_treebeard__WEBPACK_IMPORTED_MODULE_2__["Treebeard"], {
    data: decorateData(data, selected, toggled),
    onToggle: onToggle,
    style: style
  });
};

/* harmony default export */ __webpack_exports__["default"] = (DashTreebeard);
DashTreebeard.defaultProps = {};
DashTreebeard.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  toggled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3RyZWViZWFyZC8uL3NyYy9saWIvY29tcG9uZW50cy9EYXNoVHJlZWJlYXJkLnJlYWN0LmpzIl0sIm5hbWVzIjpbImRlY29yYXRlRGF0YSIsInNlbGVjdGVkIiwidG9nZ2xlU2V0Iiwia2V5IiwibmFtZSIsImNoaWxkcmVuIiwidG9nZ2xlZCIsImluY2x1ZGVzIiwiYWN0aXZlIiwibWFwIiwibm9kZSIsIkRhc2hUcmVlYmVhcmQiLCJpZCIsImRhdGEiLCJzdHlsZSIsInNldFByb3BzIiwicm9vdERhdGEiLCJkZWZhdWx0VGhlbWUiLCJvblRvZ2dsZSIsIm5vZGVUb2dnbGVkIiwiZmlsdGVyIiwiY29uc29sZSIsImxvZyIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFueSIsImlzUmVxdWlyZWQiLCJhcnJheU9mIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUF3QkMsUUFBeEIsRUFBa0NDLFNBQWxDLEVBQWdEO0FBQUEsTUFBOUNDLEdBQThDLFFBQTlDQSxHQUE4QztBQUFBLE1BQXpDQyxJQUF5QyxRQUF6Q0EsSUFBeUM7QUFBQSxNQUFuQ0MsUUFBbUMsUUFBbkNBLFFBQW1DO0FBQ2pFLFNBQU87QUFDSEYsT0FBRyxFQUFIQSxHQURHO0FBRUhDLFFBQUksRUFBSkEsSUFGRztBQUdIRSxXQUFPLEVBQUVKLFNBQVMsQ0FBQ0ssUUFBVixDQUFtQkosR0FBbkIsQ0FITjtBQUlISyxVQUFNLEVBQUVMLEdBQUcsSUFBSUYsUUFKWjtBQUtISSxZQUFRLEVBQ0pBLFFBQVEsSUFDUkEsUUFBUSxDQUFDSSxHQUFULENBQWEsVUFBQUMsSUFBSTtBQUFBLGFBQUlWLFlBQVksQ0FBQ1UsSUFBRCxFQUFPVCxRQUFQLEVBQWlCQyxTQUFqQixDQUFoQjtBQUFBLEtBQWpCO0FBUEQsR0FBUDtBQVNILENBVkQ7QUFZQTs7Ozs7Ozs7O0FBT0EsSUFBTVMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixRQUFvRDtBQUFBLE1BQWxEQyxFQUFrRCxTQUFsREEsRUFBa0Q7QUFBQSxNQUE5Q0MsSUFBOEMsU0FBOUNBLElBQThDO0FBQUEsTUFBeENaLFFBQXdDLFNBQXhDQSxRQUF3QztBQUFBLE1BQTlCSyxPQUE4QixTQUE5QkEsT0FBOEI7QUFBQSxNQUFyQlEsS0FBcUIsU0FBckJBLEtBQXFCO0FBQUEsTUFBZEMsUUFBYyxTQUFkQSxRQUFjO0FBQ3RFRixNQUFJLEdBQUdBLElBQUksSUFBSUcsUUFBZjtBQUNBRixPQUFLLEdBQUdBLEtBQUssSUFBSUcscURBQWpCO0FBQ0FYLFNBQU8sR0FBR0EsT0FBTyxJQUFJLEVBQXJCOztBQUVBLE1BQU1ZLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNSLElBQUQsRUFBT1MsV0FBUCxFQUF1QjtBQUNwQyxRQUFJVCxJQUFJLENBQUNMLFFBQVQsRUFBbUI7QUFDZixVQUFJYyxXQUFKLEVBQWlCO0FBQ2JKLGdCQUFRLENBQUM7QUFBQ1QsaUJBQU8sK0JBQU1BLE9BQU4sSUFBZUksSUFBSSxDQUFDUCxHQUFwQjtBQUFSLFNBQUQsQ0FBUjtBQUNILE9BRkQsTUFFTztBQUNIWSxnQkFBUSxDQUFDO0FBQUNULGlCQUFPLEVBQUVBLE9BQU8sQ0FBQ2MsTUFBUixDQUFlLFVBQUFqQixHQUFHO0FBQUEsbUJBQUlBLEdBQUcsSUFBSU8sSUFBSSxDQUFDUCxHQUFoQjtBQUFBLFdBQWxCO0FBQVYsU0FBRCxDQUFSO0FBQ0g7QUFDSixLQU5ELE1BTU87QUFDSFksY0FBUSxDQUFDO0FBQUNkLGdCQUFRLEVBQUVTLElBQUksQ0FBQ1A7QUFBaEIsT0FBRCxDQUFSO0FBQ0g7QUFDSixHQVZEOztBQVlBa0IsU0FBTyxDQUFDQyxHQUFSLENBQVl0QixZQUFZLENBQUNhLElBQUQsRUFBT1osUUFBUCxFQUFpQkssT0FBakIsQ0FBeEI7QUFFQSxTQUNJLDJEQUFDLHlEQUFEO0FBQ0ksUUFBSSxFQUFFTixZQUFZLENBQUNhLElBQUQsRUFBT1osUUFBUCxFQUFpQkssT0FBakIsQ0FEdEI7QUFFSSxZQUFRLEVBQUVZLFFBRmQ7QUFHSSxTQUFLLEVBQUVKO0FBSFgsSUFESjtBQU9ILENBMUJEOztBQTRCZUgsNEVBQWY7QUFFQUEsYUFBYSxDQUFDWSxZQUFkLEdBQTZCLEVBQTdCO0FBRUFaLGFBQWEsQ0FBQ2EsU0FBZCxHQUEwQjtBQUN0Qjs7O0FBR0FaLElBQUUsRUFBRWEsaURBQVMsQ0FBQ0MsTUFKUTtBQU10QmIsTUFBSSxFQUFFWSxpREFBUyxDQUFDRSxHQUFWLENBQWNDLFVBTkU7QUFRdEIzQixVQUFRLEVBQUV3QixpREFBUyxDQUFDQyxNQVJFO0FBVXRCcEIsU0FBTyxFQUFFbUIsaURBQVMsQ0FBQ0ksT0FBVixDQUFrQkosaURBQVMsQ0FBQ0MsTUFBNUIsQ0FWYTtBQVl0QlosT0FBSyxFQUFFVyxpREFBUyxDQUFDRSxHQVpLOztBQWF0Qjs7OztBQUlBWixVQUFRLEVBQUVVLGlEQUFTLENBQUNLO0FBakJFLENBQTFCLEMiLCJmaWxlIjoiOTAxOTJhMi1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtUcmVlYmVhcmR9IGZyb20gJ3JlYWN0LXRyZWViZWFyZCc7XG5pbXBvcnQgZGVmYXVsdFRoZW1lIGZyb20gJy4vZGVmYXVsdFRoZW1lJztcblxuY29uc3QgZGVjb3JhdGVEYXRhID0gKHtrZXksIG5hbWUsIGNoaWxkcmVufSwgc2VsZWN0ZWQsIHRvZ2dsZVNldCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGtleSxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdG9nZ2xlZDogdG9nZ2xlU2V0LmluY2x1ZGVzKGtleSksXG4gICAgICAgIGFjdGl2ZToga2V5ID09IHNlbGVjdGVkLFxuICAgICAgICBjaGlsZHJlbjpcbiAgICAgICAgICAgIGNoaWxkcmVuICYmXG4gICAgICAgICAgICBjaGlsZHJlbi5tYXAobm9kZSA9PiBkZWNvcmF0ZURhdGEobm9kZSwgc2VsZWN0ZWQsIHRvZ2dsZVNldCkpLFxuICAgIH07XG59O1xuXG4vKipcbiAqIEV4YW1wbGVDb21wb25lbnQgaXMgYW4gZXhhbXBsZSBjb21wb25lbnQuXG4gKiBJdCB0YWtlcyBhIHByb3BlcnR5LCBgbGFiZWxgLCBhbmRcbiAqIGRpc3BsYXlzIGl0LlxuICogSXQgcmVuZGVycyBhbiBpbnB1dCB3aXRoIHRoZSBwcm9wZXJ0eSBgdmFsdWVgXG4gKiB3aGljaCBpcyBlZGl0YWJsZSBieSB0aGUgdXNlci5cbiAqL1xuY29uc3QgRGFzaFRyZWViZWFyZCA9ICh7aWQsIGRhdGEsIHNlbGVjdGVkLCB0b2dnbGVkLCBzdHlsZSwgc2V0UHJvcHN9KSA9PiB7XG4gICAgZGF0YSA9IGRhdGEgfHwgcm9vdERhdGE7XG4gICAgc3R5bGUgPSBzdHlsZSB8fCBkZWZhdWx0VGhlbWU7XG4gICAgdG9nZ2xlZCA9IHRvZ2dsZWQgfHwgW107XG5cbiAgICBjb25zdCBvblRvZ2dsZSA9IChub2RlLCBub2RlVG9nZ2xlZCkgPT4ge1xuICAgICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKG5vZGVUb2dnbGVkKSB7XG4gICAgICAgICAgICAgICAgc2V0UHJvcHMoe3RvZ2dsZWQ6IFsuLi50b2dnbGVkLCBub2RlLmtleV19KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0UHJvcHMoe3RvZ2dsZWQ6IHRvZ2dsZWQuZmlsdGVyKGtleSA9PiBrZXkgIT0gbm9kZS5rZXkpfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRQcm9wcyh7c2VsZWN0ZWQ6IG5vZGUua2V5fSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2coZGVjb3JhdGVEYXRhKGRhdGEsIHNlbGVjdGVkLCB0b2dnbGVkKSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VHJlZWJlYXJkXG4gICAgICAgICAgICBkYXRhPXtkZWNvcmF0ZURhdGEoZGF0YSwgc2VsZWN0ZWQsIHRvZ2dsZWQpfVxuICAgICAgICAgICAgb25Ub2dnbGU9e29uVG9nZ2xlfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoVHJlZWJlYXJkO1xuXG5EYXNoVHJlZWJlYXJkLmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5EYXNoVHJlZWJlYXJkLnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIGRhdGE6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcblxuICAgIHNlbGVjdGVkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgdG9nZ2xlZDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG5cbiAgICBzdHlsZTogUHJvcFR5cGVzLmFueSxcbiAgICAvKipcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==