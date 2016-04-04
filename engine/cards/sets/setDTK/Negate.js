"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Negate extends Card {
  constructor(game) {
    super(game, "Negate", "Dragons of Tarkir", "DTK");
  }
}

module.exports = Negate;
