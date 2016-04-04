"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PackRat extends Card {
  constructor(game) {
    super(game, "Pack Rat", "Return to Ravnica", "RTR");
  }
}

module.exports = PackRat;
