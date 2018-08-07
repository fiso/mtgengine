"use strict";
const Constants = require ("../../../Constants");
const PyroblastBase = require("../setEMA/Pyroblast");

class Pyroblast extends PyroblastBase {
  constructor (game) {
    super(game, "Pyroblast", "World Championship Decks 1998", "WC98");
  }
}

module.exports = Pyroblast;
