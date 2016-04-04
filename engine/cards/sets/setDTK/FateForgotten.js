"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FateForgotten extends Card {
  constructor(game) {
    super(game, "Fate Forgotten", "Dragons of Tarkir", "DTK");
  }
}

module.exports = FateForgotten;
