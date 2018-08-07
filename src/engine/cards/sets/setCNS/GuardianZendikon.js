"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GuardianZendikon extends UnimplementedCard {
  constructor (game) {
    super(game, "Guardian Zendikon", "Conspiracy", "CNS");
  }
}

module.exports = GuardianZendikon;
