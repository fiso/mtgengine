"use strict";
const Constants = require ("../../../Constants");
const PyroblastBase = require("../setEMA/Pyroblast");

class Pyroblast extends PyroblastBase {
  constructor (game) {
    super(game, "Pyroblast", "World Championship Decks 1997", "WC97");
  }
}

module.exports = Pyroblast;
