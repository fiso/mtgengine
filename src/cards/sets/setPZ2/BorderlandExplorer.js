"use strict";
const Constants = require ("../../../Constants");
const BorderlandExplorerBase = require("../setC18/BorderlandExplorer");

class BorderlandExplorer extends BorderlandExplorerBase {
  constructor (game) {
    super(game, "Borderland Explorer", "You Make the Cube", "PZ2");
  }
}

module.exports = BorderlandExplorer;
