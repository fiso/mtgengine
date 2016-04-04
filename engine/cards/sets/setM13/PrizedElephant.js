"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrizedElephant extends Card {
  constructor(game) {
    super(game, "Prized Elephant", "Magic 2013", "M13");
  }
}

module.exports = PrizedElephant;
