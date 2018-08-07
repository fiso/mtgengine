"use strict";
const Constants = require ("../../../Constants");
const VenerableMonkBase = require("../setDVD/VenerableMonk");

class VenerableMonk extends VenerableMonkBase {
  constructor (game) {
    super(game, "Venerable Monk", "Eighth Edition", "8ED");
  }
}

module.exports = VenerableMonk;
