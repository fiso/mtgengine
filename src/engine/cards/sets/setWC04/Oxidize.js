"use strict";
const Constants = require ("../../../Constants");
const OxidizeBase = require("../setP05/Oxidize");

class Oxidize extends OxidizeBase {
  constructor (game) {
    super(game, "Oxidize", "World Championship Decks 2004", "WC04");
  }
}

module.exports = Oxidize;
