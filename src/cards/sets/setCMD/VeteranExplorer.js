"use strict";
const Constants = require ("../../../Constants");
const VeteranExplorerBase = require("../setBBD/VeteranExplorer");

class VeteranExplorer extends VeteranExplorerBase {
  constructor (game) {
    super(game, "Veteran Explorer", "Commander 2011", "CMD");
  }
}

module.exports = VeteranExplorer;
