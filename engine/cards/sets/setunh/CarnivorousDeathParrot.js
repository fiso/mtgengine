"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CarnivorousDeathParrot extends Card {
  constructor(game) {
    super(game, "Carnivorous Death-Parrot", "Unhinged", "UNH");
  }
}

module.exports = CarnivorousDeathParrot;
