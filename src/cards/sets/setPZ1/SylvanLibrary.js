"use strict";
const Constants = require ("../../../Constants");
const SylvanLibraryBase = require("../setEMA/SylvanLibrary");

class SylvanLibrary extends SylvanLibraryBase {
  constructor (game) {
    super(game, "Sylvan Library", "Legendary Cube", "PZ1");
  }
}

module.exports = SylvanLibrary;
