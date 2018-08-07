"use strict";
const Constants = require ("../../../Constants");
const FrostLynxBase = require("../setBBD/FrostLynx");

class FrostLynx extends FrostLynxBase {
  constructor (game) {
    super(game, "Frost Lynx", "Iconic Masters", "IMA");
  }
}

module.exports = FrostLynx;
