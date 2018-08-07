"use strict";
const Constants = require ("../../../Constants");
const RainbowValeBase = require("../setMED/RainbowVale");

class RainbowVale extends RainbowValeBase {
  constructor (game) {
    super(game, "Rainbow Vale", "Fallen Empires", "FEM");
  }
}

module.exports = RainbowVale;
