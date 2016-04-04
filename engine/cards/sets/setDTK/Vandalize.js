"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Vandalize extends Card {
  constructor(game) {
    super(game, "Vandalize", "Dragons of Tarkir", "DTK");
  }
}

module.exports = Vandalize;
