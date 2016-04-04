"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BasalThrull extends Card {
  constructor(game) {
    super(game, "Basal Thrull", "Fallen Empires", "FEM");
  }
}

module.exports = BasalThrull;
