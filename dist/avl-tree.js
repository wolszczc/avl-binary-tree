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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AVLTree = __webpack_require__(2);

var _AVLTree2 = _interopRequireDefault(_AVLTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AVLTree2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TreeNode = function TreeNode(value) {
  _classCallCheck(this, TreeNode);

  this.value = value;
  this.left = null;
  this.right = null;
  this.height = 1;
};

exports.default = TreeNode;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TreeNode = __webpack_require__(1);

var _TreeNode2 = _interopRequireDefault(_TreeNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AVLTree = function () {
  function AVLTree() {
    _classCallCheck(this, AVLTree);

    this.root = null;
  }

  /**
   * Add new value to tree
   * @param {value} key 
   */


  _createClass(AVLTree, [{
    key: 'insert',
    value: function insert(key) {
      this.root = this.insertToNode(this.root, key);
    }

    /**
     * Insert new value to node.
     * @param {AVLTree} root 
     * @param {value} key 
     * @returns {AVLTree} with new value
     */

  }, {
    key: 'insertToNode',
    value: function insertToNode(root, key) {
      // Perform normal BST
      if (!root) {
        return new _TreeNode2.default(key);
      } else if (key < root.value) {
        root.left = this.insertToNode(root.left, key);
      } else {
        root.right = this.insertToNode(root.right, key);
      }

      // Update the height of the ancestor nod
      root.height = 1 + this.maxRootHeight(root);

      // Get the balance factor
      var balance = this.getBalance(root);

      // If unbalanced
      // Left Left
      if (balance > 1 && key < root.left.value) {
        return this.rightRotate(root);
      }
      // Right Right 
      if (balance < -1 && key > root.right.value) {
        return this.leftRotate(root);
      }
      // Left Right 
      if (balance > 1 && key > root.left.value) {
        root.left = this.leftRotate(root.left);
        return this.rightRotate(root);
      }
      // Right Left
      if (balance < -1 && key < root.right.value) {
        root.right = this.rightRotate(root.right);
        return this.leftRotate(root);
      }

      return root;
    }

    /**
     * Rotate tree to left
     * @param {AVLTree} root 
     * @returns {AVLTree} root rotate to left
     */

  }, {
    key: 'leftRotate',
    value: function leftRotate(root) {
      var subTreeA = root.right;

      // perform rotation


      // update heights
      var _ref = [root, subTreeA.left];
      subTreeA.left = _ref[0];
      root.right = _ref[1];
      root.height = 1 + this.maxRootHeight(root);
      subTreeA.height = 1 + this.maxRootHeight(subTreeA);

      // the new root
      return subTreeA;
    }

    /**
     * Rotate tree to right
     * @param {AVLTree} root 
     * @returns {AVLTree} root rotate to right
     */

  }, {
    key: 'rightRotate',
    value: function rightRotate(root) {
      var subTreeA = root.left;

      // perform rotation


      // update heights
      var _ref2 = [root, subTreeA.right];
      subTreeA.right = _ref2[0];
      root.left = _ref2[1];
      root.height = 1 + this.maxRootHeight(root);
      subTreeA.height = 1 + this.maxRootHeight(subTreeA);

      // the new root
      return subTreeA;
    }

    /**
     * Get tree height
     * @param {AVLTree} root 
     * @returns {Number} height of tree
     */

  }, {
    key: 'getHeight',
    value: function getHeight(root) {
      return !root ? 0 : root.height;
    }

    /**
     * Get maximum tree height
     * @param {AVLTree} root 
     * @returns {Number} maximum height of branch's
     */

  }, {
    key: 'maxRootHeight',
    value: function maxRootHeight(root) {
      return Math.max(this.getHeight(root.left), this.getHeight(root.right));
    }

    /**
     * Get balanced height
     * @param {AVLTree} root 
     * @returns {Number} balanced value of branch height
     */

  }, {
    key: 'getBalance',
    value: function getBalance(root) {
      return !root ? 0 : this.getHeight(root.left) - this.getHeight(root.right);
    }
  }]);

  return AVLTree;
}();

exports.default = AVLTree;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
//# sourceMappingURL=avl-tree.js.map