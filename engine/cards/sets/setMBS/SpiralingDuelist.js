"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpiralingDuelist extends Card {
  constructor(game) {
    super(game, "Spiraling Duelist", "Mirrodin Besieged", "MBS");
  }
}

module.exports = SpiralingDuelist;
