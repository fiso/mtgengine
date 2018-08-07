"use strict";
const Constants = require ("../../../Constants");
const WeldingSparksBase = require("../setDDU/WeldingSparks");

class WeldingSparks extends WeldingSparksBase {
  constructor (game) {
    super(game, "Welding Sparks", "Kaladesh", "KLD");
  }
}

module.exports = WeldingSparks;
