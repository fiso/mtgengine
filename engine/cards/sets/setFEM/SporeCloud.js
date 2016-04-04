"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SporeCloud extends Card {
  constructor(game) {
    super(game, "Spore Cloud", "Fallen Empires", "FEM");
  }
}

module.exports = SporeCloud;
