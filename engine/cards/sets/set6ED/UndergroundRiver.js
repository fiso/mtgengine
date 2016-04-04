"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UndergroundRiver extends Card {
  constructor(game) {
    super(game, "Underground River", "Classic Sixth Edition", "6ED");
  }
}

module.exports = UndergroundRiver;
