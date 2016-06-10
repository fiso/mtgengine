"use strict";
const Constants = require ("../../../Constants");
const VenerableMonkBase = require("../set6ED/VenerableMonk");

class VenerableMonk extends VenerableMonkBase {
  constructor (game) {
    super(game, "Venerable Monk", "Tenth Edition", "10E");
  }
}

module.exports = VenerableMonk;
