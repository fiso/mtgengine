"use strict";
const Constants = require ("../../../Constants");
const NekrataalBase = require("../setBRB/Nekrataal");

class Nekrataal extends NekrataalBase {
  constructor (game) {
    super(game, "Nekrataal", "Visions", "VIS");
  }
}

module.exports = Nekrataal;
