"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Naturalize extends Card {
  constructor(game) {
    super(game, "Naturalize", "Dragons of Tarkir", "DTK");
  }
}

module.exports = Naturalize;
