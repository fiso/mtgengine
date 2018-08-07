"use strict";
const Constants = require ("../../../Constants");
const SylvanLibraryBase = require("../setEMA/SylvanLibrary");

class SylvanLibrary extends SylvanLibraryBase {
  constructor (game) {
    super(game, "Sylvan Library", "Magic Online Promos", "PRM");
  }
}

module.exports = SylvanLibrary;
