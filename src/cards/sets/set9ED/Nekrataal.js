"use strict";
const Constants = require ("../../../Constants");
const NekrataalBase = require("../setBRB/Nekrataal");

class Nekrataal extends NekrataalBase {
  constructor(game) {
    super(game, "Nekrataal", "Ninth Edition", "9ED");
  }
}

module.exports = Nekrataal;
