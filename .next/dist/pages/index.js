'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/samhinton/code/samhinton88/kickstarter-smartcontract-clone/pages/index.js?entry';


var CampaignIndex = function (_Component) {
  (0, _inherits3.default)(CampaignIndex, _Component);

  function CampaignIndex() {
    (0, _classCallCheck3.default)(this, CampaignIndex);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignIndex, [{
    key: 'renderCampaigns',
    value: function renderCampaigns() {
      var items = this.props.campaigns.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          }, 'View Campaign'),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), this.renderCampaigns(), _react2.default.createElement(_semanticUiReact.Button, {
        content: 'Create Campaign',
        icon: 'add circle',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }));
    }
  }], [{
    key: 'getInitialProps',

    // static method that is particular to next.js
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var campaigns;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 2:
                campaigns = _context.sent;
                return _context.abrupt('return', { campaigns: campaigns });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkNhcmQiLCJCdXR0b24iLCJDYW1wYWlnbkluZGV4IiwiaXRlbXMiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwicmVuZGVyQ2FtcGFpZ25zIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFNOzs7Ozs7O0lBRVQsQTs7Ozs7Ozs7Ozs7c0NBUWMsQUFDaEI7VUFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxtQkFBVyxBQUNoRDs7a0JBQU8sQUFDRyxBQUNSO3VDQUFhLGNBQUE7O3dCQUFBOzBCQUFBO0FBQUE7QUFBQSxXQUFBLEVBRlIsQUFFUSxBQUNiO2lCQUhGLEFBQU8sQUFHRSxBQUVWO0FBTFEsQUFDTDtBQUZKLEFBQWMsQUFRZCxPQVJjOzsyQ0FRUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdBLEFBQ1A7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSwwQ0FDUSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtvQkFBNUI7c0JBREYsQUFDRSxBQUVFO0FBRkY7ZUFERixBQUdJLEFBQUssQUFDUCxtQ0FBQSxBQUFDO2lCQUFELEFBQ1UsQUFDUjtjQUZGLEFBRU8sQUFDTDtpQkFIRjs7b0JBQUE7c0JBTEosQUFDRSxBQUlFLEFBUUw7QUFSSztBQUNFOzs7U0ExQlI7Ozs7Ozs7Ozs7O3VCQUUwQixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUJBQWhCLEFBQXVDLEE7O21CQUF6RDtBO2lEQUVDLEVBQUUsV0FBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTGlCLEEsQUFxQzVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW1oaW50b24vY29kZS9zYW1oaW50b244OC9raWNrc3RhcnRlci1zbWFydGNvbnRyYWN0LWNsb25lIn0=