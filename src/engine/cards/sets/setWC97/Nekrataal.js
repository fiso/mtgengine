"use strict";
const Constants = require ("../../../Constants");
const NekrataalBase = require("../setEMA/Nekrataal");

class Nekrataal extends NekrataalBase {
  constructor (game) {
    super(game, "Nekrataal", "World Championship Decks 1997", "WC97");
  }
}

module.exports = Nekrataal;
