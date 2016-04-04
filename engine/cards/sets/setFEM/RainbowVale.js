"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RainbowVale extends Card {
  constructor(game) {
    super(game, "Rainbow Vale", "Fallen Empires", "FEM");
  }
}

module.exports = RainbowVale;
