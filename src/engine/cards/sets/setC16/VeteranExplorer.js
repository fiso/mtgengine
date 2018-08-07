"use strict";
const Constants = require ("../../../Constants");
const VeteranExplorerBase = require("../setBBD/VeteranExplorer");

class VeteranExplorer extends VeteranExplorerBase {
  constructor (game) {
    super(game, "Veteran Explorer", "Commander 2016", "C16");
  }
}

module.exports = VeteranExplorer;
