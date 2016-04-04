"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MadDog extends Card {
  constructor(game) {
    super(game, "Mad Dog", "Odyssey", "ODY");
  }
}

module.exports = MadDog;
