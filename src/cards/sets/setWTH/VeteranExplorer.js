"use strict";
const Constants = require ("../../../Constants");
const VeteranExplorerBase = require("../setCMD/VeteranExplorer");

class VeteranExplorer extends VeteranExplorerBase {
  constructor (game) {
    super(game, "Veteran Explorer", "Weatherlight", "WTH");
  }
}

module.exports = VeteranExplorer;
