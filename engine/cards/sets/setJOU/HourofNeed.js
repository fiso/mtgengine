"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HourofNeed extends Card {
  constructor(game) {
    super(game, "Hour of Need", "Journey into Nyx", "JOU");
  }
}

module.exports = HourofNeed;
