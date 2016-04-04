"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PinionFeast extends Card {
  constructor(game) {
    super(game, "Pinion Feast", "Dragons of Tarkir", "DTK");
  }
}

module.exports = PinionFeast;
