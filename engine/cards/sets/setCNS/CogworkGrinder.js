"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CogworkGrinder extends Card {
  constructor(game) {
    super(game, "Cogwork Grinder", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = CogworkGrinder;
