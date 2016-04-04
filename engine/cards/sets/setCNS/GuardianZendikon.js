"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GuardianZendikon extends Card {
  constructor(game) {
    super(game, "Guardian Zendikon", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = GuardianZendikon;
