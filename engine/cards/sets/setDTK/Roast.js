"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Roast extends Card {
  constructor(game) {
    super(game, "Roast", "Dragons of Tarkir", "DTK");
  }
}

module.exports = Roast;
