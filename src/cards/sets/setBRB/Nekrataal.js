"use strict";
const Constants = require ("../../../Constants");
const NekrataalBase = require("../setEMA/Nekrataal");

class Nekrataal extends NekrataalBase {
  constructor (game) {
    super(game, "Nekrataal", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Nekrataal;
