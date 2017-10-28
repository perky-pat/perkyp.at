/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var env = Object({"NODE_ENV":"development"});

module.exports = {
  // mongodbUri: 'mongodb://localhost:27017/test',
  env: env.NODE_ENV || 'development',
  port: env.PORT || 8088,
  host: env.HOST || '0.0.0.0',
  get serverUrl() {
    return 'http://' + this.host + ':' + this.port;
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItem = __webpack_require__(26);
var Detail = __webpack_require__(27);

var Work = function (_React$Component) {
  _inherits(Work, _React$Component);

  function Work(props) {
    _classCallCheck(this, Work);

    var _this = _possibleConstructorReturn(this, (Work.__proto__ || Object.getPrototypeOf(Work)).call(this, props));

    _this.state = {
      isDetail: props.isDetail
    };
    return _this;
  }

  _createClass(Work, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'render',
    value: function render() {
      if (this.state.isDetail) {
        var seo = this.props.router.match.params.seo;
        var work = this.props.works.find(function (w) {
          return w.seo === seo;
        });

        return _react2.default.createElement(Detail, { seo: seo, data: work });
      } else {
        return _react2.default.createElement(ListItem, this.props);
      }
    }
  }]);

  return Work;
}(_react2.default.Component);

Work.propTypes = {
  isDetail: _propTypes2.default.bool.isRequired,
  router: _propTypes2.default.object,
  works: _propTypes2.default.array
};

module.exports = Work;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8).install();
var config = __webpack_require__(2);
var siteRouter = __webpack_require__(9);
var app = __webpack_require__(29);
var debug = __webpack_require__(5)('app:main');

// Site router
app.use('/', siteRouter);

// 404
app.get('*', function (req, res) {
  res.status(404).render('404', { title: '404 - Not found' });
  res.end();
});

// Start server
app.listen(config.port, config.host, function () {
  debug('Express listening on port', config.port);
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var config = __webpack_require__(2);
var express = __webpack_require__(4);
var debug = __webpack_require__(5)('app:site');
var router = express.Router();

// Data
var initialData = __webpack_require__(10);

// React
var React = __webpack_require__(0);
var ReactDOMServer = __webpack_require__(20);
var StaticRouter = __webpack_require__(21).StaticRouter;

// Data + Components
var App = __webpack_require__(22);

var frontendRoutes = ['/bio', '/work/:id', '/'];

router.get(frontendRoutes, function (req, res) {
  var context = {};

  var initialMarkup = ReactDOMServer.renderToString(React.createElement(
    StaticRouter,
    { location: req.url, context: context },
    React.createElement(App, { initialData: initialData })
  ));

  // Base url
  var baseUrl = config.serverUrl;

  debug(baseUrl);
  debug(req.path, context);

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  } else {
    // Add the requested id if present
    initialData.requestedId = req.params.id;

    // Add url and path information
    initialData.baseUrl = baseUrl;
    initialData.path = req.path;
    initialData.url = baseUrl + req.path;

    res.render('index', {
      initialMarkup: initialMarkup,
      initialData: initialData,
      bundle: config.env === 'production' ? 'bundle.js' : 'bundle.min.js'
    });
    res.end();
  }
});

module.exports = router;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var works = __webpack_require__(11);
var pages = __webpack_require__(17);

module.exports = {
  title: 'Perky Pat',
  metaKeywords: 'key1, key2, key3',
  metaDescription: 'Description here.',
  ogTitle: 'Perky Pat Designs',
  ogDescription: 'Description here.',
  works: works,
  pages: pages
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [{
  uid: 5153,
  seo: 'the-hunt',
  active: 1,
  name: 'The hunt',
  year: 2016,
  intro: 'Octahedron hunted by lines',
  preview: 'preview.jpg',
  image: 'main.jpg',
  vimeoId: null,
  detail: __webpack_require__(12),
  template: 'base' // can be 'base' or null (default is null)
}, {
  uid: 4473,
  seo: 'the-airport-of-the-future',
  active: 1,
  name: 'The airport of the future',
  year: 2016,
  intro: 'Scroll based 2D animations',
  preview: 'preview.jpg',
  image: 'main.jpg',
  vimeoId: null,
  detail: __webpack_require__(13),
  template: 'base' // can be 'base' or null (default is null)
}, {
  uid: 3277,
  seo: 'fan-beat',
  active: 1,
  name: 'Fan Beat',
  year: 2016,
  intro: 'Interactive installation for concerts',
  preview: 'preview.jpg',
  image: 'main.jpg',
  vimeoId: null,
  detail: __webpack_require__(14),
  template: 'base' // can be 'base' or null (default is null)
}, {
  uid: 8742,
  seo: 'pride-prejudice',
  active: 1,
  name: 'Pride & Prejudice',
  year: 2016,
  intro: 'Looong interactive streamgraph',
  preview: 'preview.jpg',
  image: 'main.jpg',
  vimeoId: null,
  detail: __webpack_require__(15),
  template: 'base' // can be 'base' or null (default is null)
}, {
  uid: 7344,
  seo: 'w152',
  active: 1,
  name: 'Industrial Facility w152',
  year: 2016,
  intro: 'Scroll based 2D animations',
  preview: 'preview.jpg',
  image: 'main.jpg',
  vimeoId: null,
  detail: __webpack_require__(16),
  template: 'base' // can be 'base' or null (default is null)
}];

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<div class=\"inner inner-container\">\n    <div class=\"text\">\n        <div class=\"inner\">\n            <span class=\"title\">The hunt</span>\n\n            <span class=\"year\">2017</span>\n\n            <div class=\"description\">\n                Abstract 3D animation. Octahedron hunted by lines. Three.js / WebGL, GLSL, perlin noise.\n                <br>\n                <br>\n            </div>\n\n            <span class=\"link\">\n                <a href=\"https://the-hunt.surge.sh\" target=\"_blank\">Link</a>\n            </span>\n\n        </div>\n    </div>\n\n    <div class=\"images\">\n        <div class=\"art image\">\n            <img src='../assets/works/the-hunt/main.jpg'>\n        </div>\n    </div>\n</div>"

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "<div class=\"inner inner-container\">\n    <div class=\"text\">\n        <div class=\"inner\">\n            <span class=\"title\">The airport of the future</span>\n            2016\n            <br>\n            <br> Designed by the Guardian, this web application shows animated visions of a possible airport of the future. I created a series of interactive 2D animations from the absurdly beautiful illustrations made by\n            <a href=\"http://www.samchivers.com/\">Sam Chivers</a>, with a 70s sci-fi taste.\n\n            <br>\n            <br>\n            <a href=\"https://www.theguardian.com/heathrow-sustainable-mobility-zone/ng-interactive/2016/sep/28/sustainable-aviation-environmental-impact-airport-of-the-future\" target=\"_blank\">Link</a>\n\n        </div>\n    </div>\n\n\n    <div class=\"images\">\n\n        <div class=\"art vimeo \">\n            <iframe id=\"vimeo-184683860\" class=\"vimeo-iframe\" src=\"//player.vimeo.com/video/184683860\" width=\"751\" height=\"422\" frameborder=\"0\" webkitallowfullscreen=\"\" mozallowfullscreen=\"\" allowfullscreen=\"\" style=\"width: 751px; height: 422px;\" data-ready=\"true\"></iframe>\n        </div>\n\n        <div class=\"art vimeo last\">\n            <iframe id=\"vimeo-184684957\" class=\"vimeo-iframe\" src=\"//player.vimeo.com/video/184684957\" width=\"751\" height=\"751\" frameborder=\"0\" webkitallowfullscreen=\"\" mozallowfullscreen=\"\" allowfullscreen=\"\" style=\"width: 751px; height: 751px;\" data-ready=\"true\"></iframe>\n        </div>\n\n    </div>\n</div>"

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "<div class=\"inner inner-container\">\n\n    <div class=\"images\">\n\n        <div class=\"art vimeo\">\n            <iframe id=\"vimeo-151087915\" class=\"vimeo-iframe\" src=\"//player.vimeo.com/video/151087915\" width=\"751\" height=\"422\" frameborder=\"0\" webkitallowfullscreen=\"\" mozallowfullscreen=\"\" allowfullscreen=\"\" style=\"width: 751px; height: 422px;\" data-ready=\"true\"></iframe>\n        </div>\n\n    </div>\n\n    <div class=\"text\">\n        <div class=\"inner\">\n            <span class=\"title\">Fan Beat</span>\n\n            <!-- <span class=\"year\">2016</span> -->\n\n            <div class=\"description\">\n                Designed by\n                <a href=\"http://www.studio-output.com/\" target=\"_blank\">Studio Output</a> (London) and\n                <a href=\"http://www.field.io/\" target=\"_blank\">Field.io</a> (London), Fan Beat is an installation for concerts based on a wall projection and a large touch screen. The installation visualizes the social interactions as generative creatures (metaballs) during the concert.\n                <br>\n                <br> Metaballs animations:\n                <a href=\"http://jocabola.com\" target=\"_blank\">Jocabola</a>\n                <br>\n                <br> Agencies:\n                <a href=\"http://www.studio-output.com/\" target=\"_blank\">Studio Output</a> +\n                <a href=\"http://www.studio-output.com/\" target=\"_blank\">Field.io</a>\n            </div>\n\n            <span class=\"link\">\n                <a href=\"http://www.studio-output.com/case_study/sap-live-nation-fanbeat/\">More info</a>\n            </span>\n\n        </div>\n    </div>\n\n\n\n</div>"

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "<div class=\"inner inner-container\">\n    <div class=\"text\">\n        <div class=\"inner\">\n            <span class=\"title\">Pride & Prejudice</span>\n\n            <span class=\"year\">2016</span>\n\n            <div class=\"description\">\n                Designed by\n                <a href=\"http://signal-noise.co.uk/\" target=\"_blank\">Signal Noise</a>, this application shows data collected by\n                <a href=\"http://www.economist.com/\" target=\"_blank\">The Economist</a>, for an international event in support of LGBT rights:\n                <a href=\"http://prideandprejudice.economist.com/research/\" target=\"_blank\">Pride &amp; Prejudice</a>.\n                <br> The most interesting part of the work is a long interactive\n                <a href=\"https://en.wikipedia.org/wiki/Streamgraph\" target=\"\" _blank=\"\">streamgraph</a> that spans across many screens.\n                <br> The second video shows the streamgraph in its early stage.\n                <br>\n                <br> Agency:\n                <a href=\"http://signal-noise.co.uk/\" target=\"_blank\">Signal Noise</a>, London\n                <br>\n                <br>\n            </div>\n\n            <span class=\"link\">\n                <a href=\"https://d1xso9gob5fu6y.cloudfront.net/\" target=\"_blank\">Link</a>\n            </span>\n\n        </div>\n    </div>\n\n    <div class=\"images\">\n        <div class=\"art image\">\n            <img src='../assets/works/pride-prejudice/main.jpg'>\n        </div>\n    </div>\n</div>"

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "<div class=\"inner inner-container\">\n    <div class=\"text\">\n        <div class=\"inner\">\n            <span class=\"title\">Industrial Facility w152</span>\n\n            <span class=\"year\">2015</span>\n\n            <div class=\"description\">\n                Single page application based on a long scroll that triggers interactive frame by frame animations.\n                <br> The lamp was designed by\n                <a href=\"http://www.industrialfacility.co.uk/\" target=\"_blank\">Industrial Facility</a> and\n                <a href=\"http://www.wastberg.com/\" target=\"_blank\">Wästberg</a>.\n\n                <br>\n                <br> Animation + Illustration:\n                <a href=\"http://www.mickeyandjohnny.com/johnny/\" target=\"_blank\">Johnny Kelly</a>, London\n                <br>\n                <br> Agency: La Moulade, London\n                <br>\n                <br>\n            </div>\n\n            <span class=\"link\">\n                <a href=\"https://www.wastberg.com/collections/w152-busby/about/\" target=\"_blank\">More info</a>\n            </span>\n\n        </div>\n    </div>\n\n    <div class=\"images\">\n        <div class=\"art image\">\n            <img src='../assets/works/w152/main.jpg'>\n        </div>\n    </div>\n\n</div>"

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  bio: __webpack_require__(18),
  contact: __webpack_require__(19)
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "<div class='inner inner-container'>\n  <!-- <h1 className='title'>Bio.</h1> -->\n  My name is Esteban. I live in London and work at the intersection of visual arts, computational design, data visualisation and front end development.\n  <br /> In 2005 I graduated in art and cinema studies at the University of Bologna, Italy. Today I create interactive installations and web applications, often in collaboration with creative studios, designers and artists.\n  <br />\n  <br />\n  <h2>Tech</h2>\n  If you have a project and wonder if I could help, these are the tools and techniques that I use (all open web technologies): Javascript, Three.js / WebGL, canvas 2D, D3.js, Node, all current task managers and transpilers (Babel, Webpack, Gulp, etc) and some frameworks (Backbone and React).\n  <br />\n  <br />\n  <h2>Collaborations</h2>\n  In the last years I have worked with:\n  <ul>\n    <li>\n      <a href='http://www.field.io/' target='_blank'>Field.io, London</a>\n    </li>\n    <li>\n      <a href='http://www.theguardian.com/uk/' target='_blank'>The Guardian, London</a>\n    </li>\n    <li>\n      <a href='http://signal-noise.co.uk/' target='_blank'>Signal | Noise, London</a>\n      <ul>\n        <li>The Economist</li>\n      </ul>\n    </li>\n    <li>\n      <a href='http://www.toasterltd.com/' target='_blank'>Toaster, London</a>\n      <ul>\n        <li>Google</li>\n      </ul>\n    </li>\n    <li>\n      <a href='http://www.artificialrome.com/' target='_blank'>Artificial Rome, Berlin</a>\n      <ul>\n        <li>Siemens, Sennheiser</li>\n      </ul>\n    </li>\n    <li>\n      <a href='http://www.agencepoupeesrusses.com/' target='_blank'>Poupées Russes, Paris</a>\n      <ul>\n        <li>Guerlain, Dior</li>\n      </ul>\n    </li>\n    <li>\n      La Moulade, London\n      <ul>\n        <li>\n          <a href='http://www.christianlouboutin.com/' target='_blank'>Christian Louboutin</a>,\n          <a href='http://www.industrialfacility.com/' target='_blank'>Industrial Facility</a>,\n          <a href='http://www.wastberg.com/' target='_blank'>Wastberg</a>\n        </li>\n      </ul>\n    </li>\n    <li>\n      <a href='http://www.mazarine.com/' target='_blank'>Mazarine Digital, Paris</a>\n      <ul>\n        <li>Chanel, Dior, Caroll, Carven, Biotherm, Club Med, etc.</li>\n      </ul>\n    </li>\n    <li>\n      <a href='http://www.betc-life.com/fr/' target='_blank'>BETC, Paris</a>\n      <ul>\n        <li>Peugeot, Canal +, Pages Jaunes, Sixt, etc.</li>\n      </ul>\n    </li>\n    <li>\n      <a href='http://www.buzzman.fr/' target='_blank'>Buzzman, Paris</a>\n      <ul>\n        <li>Microsoft Bing, MTV, Cannes Lions, etc.</li>\n      </ul>\n    </li>\n\n    <li>\n      <a href='http://www.heineken.fr/' target='_blank'>Heineken France, Paris</a>\n    </li>\n    <li>\n      <a href='http://www.alaincharlesperrot.com/' target='_blank'>Alain Charles Perrot, Architecte - Paris</a>\n    </li>\n    <li>\n      <a href='http://www.mademoisellechapeaux.com/' target='_blank'>Mademoiselle Chapeaux - Paris</a>\n    </li>\n    <li>\n      <a href='http://www.galeriecharlot.com/' target='_blank'>Galerie Charlot - Paris</a>\n    </li>\n    <li>\n      <a href='http://www.ponctuelle.fr/' target='_blank'>Ponctuelle Light Design - Paris</a>\n    </li>\n    <li>\n      <a href='http://www.dancityfestival.com/' target='_blank'>Dancity Festival - Italy</a>\n    </li>\n  </ul>\n</div>"

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "<strong>Esteban ALMIRON</strong>\n<br>\n<a href=\"#\" rel=\"mail/perkyp.at\" class=\"rj4kj325jn88dJ3HwwlP\"></a>\n<br>\n<a href=\"https://goo.gl/maps/FZZzQtZFhLF2\" target=\"_blank\">London E8</a>\n<br>\n<br>\n<a href=\"https://www.linkedin.com/in/estebanalmiron\">Linkedin</a>"

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(3);

var _Bio = __webpack_require__(23);

var _Bio2 = _interopRequireDefault(_Bio);

var _ = __webpack_require__(24);

var _2 = _interopRequireDefault(_);

var _Works = __webpack_require__(25);

var _Works2 = _interopRequireDefault(_Works);

var _Work = __webpack_require__(6);

var _Work2 = _interopRequireDefault(_Work);

var _Nav = __webpack_require__(28);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    props.initialData.isBrowser = props.isBrowser || false;
    props.initialData.isMobile = props.isMobile || false;

    _this.state = props.initialData;
    return _this;
  }

  _createClass(App, [{
    key: 'onResize',
    value: function onResize() {
      // this.setState({
      //   width: window.innerWidth,
      //   height: window.innerHeight
      // });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Nav2.default, { isBrowser: this.state.isBrowser, contactHtml: this.state.pages.contact }),
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: function component() {
              return _react2.default.createElement(_Works2.default, { works: _this2.state.works });
            } }),
          _react2.default.createElement(_reactRouterDom.Route, {
            path: '/work/:seo',
            component: function component(router) {
              return _react2.default.createElement(_Work2.default, { router: router, works: _this2.state.works, isDetail: true });
            }
          }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/bio', component: function component() {
              return _react2.default.createElement(_Bio2.default, { html: _this2.state.pages.bio });
            } }),
          _react2.default.createElement(_reactRouterDom.Route, { component: _2.default })
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

App.propTypes = {
  initialData: _propTypes2.default.object.isRequired
};

module.exports = App;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);

var Bio = function Bio(props) {
  return React.createElement('div', { id: 'bio', className: 'page', dangerouslySetInnerHTML: { __html: props.html } });
};

module.exports = Bio;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);

var Page = function Page(props) {
  return React.createElement(
    'div',
    { id: '404', className: 'page' },
    React.createElement(
      'div',
      { className: 'absolute-center' },
      React.createElement(
        'h1',
        { className: 'title' },
        '404'
      )
    )
  );
};

module.exports = Page;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Work = __webpack_require__(6);

var _Work2 = _interopRequireDefault(_Work);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Works = function Works(props) {
  return _react2.default.createElement(
    'div',
    { id: 'works', className: 'grid' },
    _react2.default.createElement(
      'div',
      { className: 'inner inner-container' },
      props.works.map(function (work) {
        return _react2.default.createElement(_Work2.default, _extends({ key: work.uid }, work, { isDetail: false }));
      })
    )
  );
};

Works.propTypes = {
  works: _propTypes2.default.array.isRequired
};

module.exports = Works;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItem = function ListItem(props) {
  return _react2.default.createElement(
    _reactRouterDom.Link,
    { to: '/work/' + props.seo, id: 'item-' + props.seo, className: 'list-item' },
    _react2.default.createElement(
      'span',
      { className: 'image-wrapper' },
      _react2.default.createElement('img', { src: 'assets/works/' + props.seo + '/' + props.preview })
    ),
    _react2.default.createElement(
      'span',
      { className: 'details' },
      _react2.default.createElement(
        'span',
        { className: 'name' },
        props.name
      ),
      _react2.default.createElement(
        'span',
        { className: 'intro' },
        props.intro
      )
    )
  );
};

ListItem.propTypes = {
  seo: _propTypes2.default.string.isRequired,
  preview: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  intro: _propTypes2.default.string.isRequired
};

module.exports = ListItem;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Detail = function (_React$Component) {
  _inherits(Detail, _React$Component);

  function Detail(props) {
    _classCallCheck(this, Detail);

    var _this = _possibleConstructorReturn(this, (Detail.__proto__ || Object.getPrototypeOf(Detail)).call(this, props));

    _this.state = {
      seo: props.seo,
      data: props.data
    };
    return _this;
  }

  _createClass(Detail, [{
    key: 'render',
    value: function render() {
      var seo = this.props.seo;
      var data = this.props.data;
      var cssClass = data.template === 'base' ? 'base' : null;

      return _react2.default.createElement('div', {
        id: '' + seo,
        className: 'detail ' + cssClass,
        dangerouslySetInnerHTML: { __html: this.props.data.detail }
      });
    }
  }]);

  return Detail;
}(_react2.default.Component);

Detail.propTypes = {
  seo: _propTypes2.default.string.isRequired,
  data: _propTypes2.default.object.isRequired
};

module.exports = Detail;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const Nav = () => (

var Nav = function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav(props) {
    _classCallCheck(this, Nav);

    var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

    _this.state = {
      open: false
    };

    _this.toggleNav = _this.toggleNav.bind(_this);
    return _this;
  }

  _createClass(Nav, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Render email address
      var emailLink = $('.rj4kj325jn88dJ3HwwlP')[0];
      if (emailLink) {
        var email = emailLink.rel.replace('/', '@');
        var part = ['m', 'a', 'i', 'l', 't', 'o', ':'];
        emailLink.href = part.join('') + email;
        $(emailLink).text(email);
      }
    }
  }, {
    key: 'toggleNav',
    value: function toggleNav() {
      this.setState({
        open: !this.state.open
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { id: 'nav', className: this.state.open ? 'open' : null },
        _react2.default.createElement(
          'div',
          { className: 'switch', onClick: this.toggleNav },
          _react2.default.createElement(
            'svg',
            { className: 'icon', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 50 50' },
            _react2.default.createElement('path', { d: 'M50,28.57H28.57V50H21.43V28.57H0V21.43H21.43V0h7.14V21.43H50Z' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'popup', onClick: this.toggleNav },
          _react2.default.createElement(
            'div',
            { className: 'inner' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: 'link', to: '/' },
              'Works'
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: 'link', to: '/bio' },
              'Bio'
            ),
            _react2.default.createElement('div', { className: 'contact', dangerouslySetInnerHTML: { __html: this.props.contactHtml } })
          )
        ),
        _react2.default.createElement('div', { className: 'cover', onClick: this.toggleNav })
      );
    }
  }]);

  return Nav;
}(_react2.default.Component);

module.exports = Nav;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var config = __webpack_require__(2);
// const path = require('path')
var express = __webpack_require__(4);
var bodyParser = __webpack_require__(30);
var compression = __webpack_require__(31);
// const debug = require('debug')('app:main')

var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());

if (config.env === 'production') {
  app.use(compression());
  // app.enable('view cache');
}

// Static files
app.use('/assets', express.static('public/assets'));

module.exports = app;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map