"use strict";
const Constants = require ("../../../Constants");
const LuminousBondsBase = require("../setM19/LuminousBonds");

class LuminousBonds extends LuminousBondsBase {
  constructor (game) {
    super(game, "Luminous Bonds", "Rivals of Ixalan", "RIX");
  }
}

module.exports = LuminousBonds;
