"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SporeFlower extends UnimplementedCard {
  constructor(game) {
    super(game, "Spore Flower", "Fallen Empires", "FEM");
  }
}

module.exports = SporeFlower;
