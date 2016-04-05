"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarnivorousDeathParrot extends UnimplementedCard {
  constructor(game) {
    super(game, "Carnivorous Death-Parrot", "Unhinged", "UNH");
  }
}

module.exports = CarnivorousDeathParrot;
