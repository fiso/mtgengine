"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RhoxWarMonk extends Card {
  constructor(game) {
    super(game, "Rhox War Monk", "Friday Night Magic", "pFNM");
  }
}

module.exports = RhoxWarMonk;
