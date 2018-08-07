"use strict";
const Constants = require ("../../../Constants");
const VenerableMonkBase = require("../setDVD/VenerableMonk");

class VenerableMonk extends VenerableMonkBase {
  constructor (game) {
    super(game, "Venerable Monk", "Starter 2000", "S00");
  }
}

module.exports = VenerableMonk;
