"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoldMyr extends Card {
  constructor(game) {
    super(game, "Gold Myr", "Mirrodin", "MRD");
  }
}

module.exports = GoldMyr;
