"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JeskaiBarricade extends Card {
  constructor(game) {
    super(game, "Jeskai Barricade", "Fate Reforged", "FRF");
  }
}

module.exports = JeskaiBarricade;
