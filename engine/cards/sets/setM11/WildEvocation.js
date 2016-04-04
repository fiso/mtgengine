"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildEvocation extends Card {
  constructor(game) {
    super(game, "Wild Evocation", "Magic 2011", "M11");
  }
}

module.exports = WildEvocation;
