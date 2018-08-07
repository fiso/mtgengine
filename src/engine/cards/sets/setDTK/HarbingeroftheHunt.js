"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarbingeroftheHunt extends UnimplementedCard {
  constructor (game) {
    super(game, "Harbinger of the Hunt", "Dragons of Tarkir", "DTK");
  }
}

module.exports = HarbingeroftheHunt;
