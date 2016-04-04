"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoldmeadowDodger extends Card {
  constructor(game) {
    super(game, "Goldmeadow Dodger", "Lorwyn", "LRW");
  }
}

module.exports = GoldmeadowDodger;
