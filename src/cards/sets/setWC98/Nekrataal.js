"use strict";
const Constants = require ("../../../Constants");
const NekrataalBase = require("../setEMA/Nekrataal");

class Nekrataal extends NekrataalBase {
  constructor (game) {
    super(game, "Nekrataal", "World Championship Decks 1998", "WC98");
  }
}

module.exports = Nekrataal;
