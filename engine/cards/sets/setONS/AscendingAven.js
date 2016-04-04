"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AscendingAven extends Card {
  constructor(game) {
    super(game, "Ascending Aven", "Onslaught", "ONS");
  }
}

module.exports = AscendingAven;
