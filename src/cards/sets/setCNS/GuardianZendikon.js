"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GuardianZendikon extends UnimplementedCard {
  constructor (game) {
    super(game, "Guardian Zendikon", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = GuardianZendikon;
