"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Flatten extends Card {
  constructor(game) {
    super(game, "Flatten", "Dragons of Tarkir", "DTK");
  }
}

module.exports = Flatten;
