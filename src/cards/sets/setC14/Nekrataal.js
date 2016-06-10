"use strict";
const Constants = require ("../../../Constants");
const NekrataalBase = require("../setBRB/Nekrataal");

class Nekrataal extends NekrataalBase {
  constructor (game) {
    super(game, "Nekrataal", "Commander 2014", "C14");
  }
}

module.exports = Nekrataal;
