"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Resupply extends Card {
  constructor(game) {
    super(game, "Resupply", "Dragons of Tarkir", "DTK");
  }
}

module.exports = Resupply;
