"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SporeFlower extends Card {
  constructor(game) {
    super(game, "Spore Flower", "Fallen Empires", "FEM");
  }
}

module.exports = SporeFlower;
