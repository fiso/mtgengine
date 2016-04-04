"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StalwartAven extends Card {
  constructor(game) {
    super(game, "Stalwart Aven", "Magic Origins", "ORI");
  }
}

module.exports = StalwartAven;
