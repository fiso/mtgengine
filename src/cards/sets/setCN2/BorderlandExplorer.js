"use strict";
const Constants = require ("../../../Constants");
const BorderlandExplorerBase = require("../setC18/BorderlandExplorer");

class BorderlandExplorer extends BorderlandExplorerBase {
  constructor (game) {
    super(game, "Borderland Explorer", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = BorderlandExplorer;
