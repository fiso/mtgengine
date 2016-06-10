"use strict";
const Constants = require ("../../../Constants");
const SylvanLibraryBase = require("../setCM1/SylvanLibrary");

class SylvanLibrary extends SylvanLibraryBase {
  constructor (game) {
    super(game, "Sylvan Library", "Vintage Masters", "VMA");
  }
}

module.exports = SylvanLibrary;
