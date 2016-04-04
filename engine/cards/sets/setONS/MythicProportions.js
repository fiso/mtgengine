"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MythicProportions extends Card {
  constructor(game) {
    super(game, "Mythic Proportions", "Onslaught", "ONS");
  }
}

module.exports = MythicProportions;
