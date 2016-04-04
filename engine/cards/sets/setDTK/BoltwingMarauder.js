"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoltwingMarauder extends Card {
  constructor(game) {
    super(game, "Boltwing Marauder", "Dragons of Tarkir", "DTK");
  }
}

module.exports = BoltwingMarauder;
