"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SqueakingPieSneak extends Card {
  constructor(game) {
    super(game, "Squeaking Pie Sneak", "Lorwyn", "LRW");
  }
}

module.exports = SqueakingPieSneak;
