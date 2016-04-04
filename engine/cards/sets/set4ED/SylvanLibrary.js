"use strict";
const Constants = require ("../../../Constants");
const SylvanLibraryBase = require("../setCM1/SylvanLibrary");

class SylvanLibrary extends SylvanLibraryBase {
  constructor(game) {
    super(game, "Sylvan Library", "Fourth Edition", "4ED");
  }
}

module.exports = SylvanLibrary;
