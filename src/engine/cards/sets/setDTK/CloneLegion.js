"use strict";
const Constants = require ("../../../Constants");
const CloneLegionBase = require("../setC17/CloneLegion");

class CloneLegion extends CloneLegionBase {
  constructor (game) {
    super(game, "Clone Legion", "Dragons of Tarkir", "DTK");
  }
}

module.exports = CloneLegion;
