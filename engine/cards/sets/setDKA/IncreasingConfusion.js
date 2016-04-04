"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IncreasingConfusion extends Card {
  constructor(game) {
    super(game, "Increasing Confusion", "Dark Ascension", "DKA");
  }
}

module.exports = IncreasingConfusion;
