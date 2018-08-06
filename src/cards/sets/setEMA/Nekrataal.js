"use strict";
const Constants = require ("../../../Constants");
const NekrataalBase = require("../setBRB/Nekrataal");

class Nekrataal extends NekrataalBase {
  constructor (game) {
    super(game, "Nekrataal", "Eternal Masters", "EMA");
  }
}

module.exports = Nekrataal;
