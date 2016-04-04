"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SylvanLibraryBase = require("../setCM1/SylvanLibrary.js");

class SylvanLibrary extends SylvanLibraryBase {
  constructor(game) {
    super(game, "Sylvan Library", "Vintage Masters", "VMA");
  }
}

module.exports = SylvanLibrary;
