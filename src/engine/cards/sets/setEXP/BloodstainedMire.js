"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodstainedMire extends UnimplementedCard {
  constructor (game) {
    super(game, "Bloodstained Mire", "Zendikar Expeditions", "EXP");
  }
}

module.exports = BloodstainedMire;
