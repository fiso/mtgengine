"use strict";
const Constants = require ("../../../Constants");
const SylvanLibraryBase = require("../setEMA/SylvanLibrary");

class SylvanLibrary extends SylvanLibraryBase {
  constructor (game) {
    super(game, "Sylvan Library", "Vintage Masters", "VMA");
  }
}

module.exports = SylvanLibrary;
