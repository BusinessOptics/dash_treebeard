webpackHotUpdatedash_treebeard("main",{

/***/ "./src/demo/App.js":
/*!*************************!*\
  !*** ./src/demo/App.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib */ "./src/lib/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint no-magic-numbers: 0 */


var data = {
  name: 'root',
  key: '__root__',
  children: [{
    key: 'A',
    name: 'A',
    children: [{
      name: '1',
      key: 'A.1'
    }, {
      name: '2',
      key: 'A.2'
    }]
  }, {
    name: 'B',
    children: [{
      name: 'X',
      key: 'B.X',
      children: [{
        name: '1',
        key: 'B.X.1'
      }, {
        name: '2',
        key: 'B.X.2'
      }]
    }]
  }]
};

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));
    _this.state = {
      data: data
    };
    _this.setProps = _this.setProps.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "setProps",
    value: function setProps(newProps) {
      this.setState(newProps);
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["DashTreebeard"], _extends({
        setProps: this.setProps
      }, this.state, {
        persistence: true
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3RyZWViZWFyZC8uL3NyYy9kZW1vL0FwcC5qcyJdLCJuYW1lcyI6WyJkYXRhIiwibmFtZSIsImtleSIsImNoaWxkcmVuIiwiQXBwIiwic3RhdGUiLCJzZXRQcm9wcyIsImJpbmQiLCJuZXdQcm9wcyIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLElBQUksR0FBRztBQUNUQyxNQUFJLEVBQUUsTUFERztBQUVUQyxLQUFHLEVBQUUsVUFGSTtBQUdUQyxVQUFRLEVBQUUsQ0FDTjtBQUNJRCxPQUFHLEVBQUUsR0FEVDtBQUVJRCxRQUFJLEVBQUUsR0FGVjtBQUdJRSxZQUFRLEVBQUUsQ0FDTjtBQUFDRixVQUFJLEVBQUUsR0FBUDtBQUFZQyxTQUFHLEVBQUU7QUFBakIsS0FETSxFQUVOO0FBQUNELFVBQUksRUFBRSxHQUFQO0FBQVlDLFNBQUcsRUFBRTtBQUFqQixLQUZNO0FBSGQsR0FETSxFQVNOO0FBQ0lELFFBQUksRUFBRSxHQURWO0FBRUlFLFlBQVEsRUFBRSxDQUNOO0FBQ0lGLFVBQUksRUFBRSxHQURWO0FBRUlDLFNBQUcsRUFBRSxLQUZUO0FBR0lDLGNBQVEsRUFBRSxDQUNOO0FBQUNGLFlBQUksRUFBRSxHQUFQO0FBQVlDLFdBQUcsRUFBRTtBQUFqQixPQURNLEVBRU47QUFBQ0QsWUFBSSxFQUFFLEdBQVA7QUFBWUMsV0FBRyxFQUFFO0FBQWpCLE9BRk07QUFIZCxLQURNO0FBRmQsR0FUTTtBQUhELENBQWI7O0lBNEJNRSxHOzs7OztBQUNGLGlCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEwsVUFBSSxFQUFKQTtBQURTLEtBQWI7QUFHQSxVQUFLTSxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCwrQkFBaEI7QUFMVTtBQU1iOzs7OzZCQUVRQyxRLEVBQVU7QUFDZixXQUFLQyxRQUFMLENBQWNELFFBQWQ7QUFDSDs7OzZCQUVRO0FBQ0xFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtOLEtBQWpCO0FBQ0EsYUFDSSx3RUFDSSwyREFBQyxrREFBRDtBQUNJLGdCQUFRLEVBQUUsS0FBS0M7QUFEbkIsU0FFUSxLQUFLRCxLQUZiO0FBR0ksbUJBQVcsRUFBRTtBQUhqQixTQURKLENBREo7QUFTSDs7OztFQXhCYU8sK0M7O0FBMkJIUixrRUFBZixFIiwiZmlsZSI6ImY0MmQyNDAtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLW1hZ2ljLW51bWJlcnM6IDAgKi9cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge0Rhc2hUcmVlYmVhcmR9IGZyb20gJy4uL2xpYic7XG5cbmNvbnN0IGRhdGEgPSB7XG4gICAgbmFtZTogJ3Jvb3QnLFxuICAgIGtleTogJ19fcm9vdF9fJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBrZXk6ICdBJyxcbiAgICAgICAgICAgIG5hbWU6ICdBJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAge25hbWU6ICcxJywga2V5OiAnQS4xJ30sXG4gICAgICAgICAgICAgICAge25hbWU6ICcyJywga2V5OiAnQS4yJ30sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnQicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1gnLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdCLlgnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6ICcxJywga2V5OiAnQi5YLjEnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnMicsIGtleTogJ0IuWC4yJ30sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgXSxcbn07XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldFByb3BzID0gdGhpcy5zZXRQcm9wcy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHNldFByb3BzKG5ld1Byb3BzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3UHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxEYXNoVHJlZWJlYXJkXG4gICAgICAgICAgICAgICAgICAgIHNldFByb3BzPXt0aGlzLnNldFByb3BzfVxuICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgcGVyc2lzdGVuY2U9e3RydWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==