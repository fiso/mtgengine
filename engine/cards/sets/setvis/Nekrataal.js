"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NekrataalBase = require("../setBRB/Nekrataal.js");

class Nekrataal extends NekrataalBase {
  constructor(game) {
    super(game, "Nekrataal", "Visions", "VIS");
  }
}

module.exports = Nekrataal;
