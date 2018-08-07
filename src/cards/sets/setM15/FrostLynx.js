"use strict";
const Constants = require ("../../../Constants");
const FrostLynxBase = require("../setBBD/FrostLynx");

class FrostLynx extends FrostLynxBase {
  constructor (game) {
    super(game, "Frost Lynx", "Magic 2015", "M15");
  }
}

module.exports = FrostLynx;
