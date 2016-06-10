"use strict";
const Constants = require ("../../../Constants");
const NekrataalBase = require("../setBRB/Nekrataal");

class Nekrataal extends NekrataalBase {
  constructor (game) {
    super(game, "Nekrataal", "Eighth Edition", "8ED");
  }
}

module.exports = Nekrataal;
