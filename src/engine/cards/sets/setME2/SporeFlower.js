"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SporeFlower extends UnimplementedCard {
  constructor (game) {
    super(game, "Spore Flower", "Masters Edition II", "ME2");
  }
}

module.exports = SporeFlower;
