"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GraftedWargear extends Card {
  constructor(game) {
    super(game, "Grafted Wargear", "Fifth Dawn", "5DN");
  }
}

module.exports = GraftedWargear;
