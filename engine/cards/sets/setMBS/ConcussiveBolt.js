"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConcussiveBolt extends UnimplementedCard {
  constructor(game) {
    super(game, "Concussive Bolt", "Mirrodin Besieged", "MBS");
  }
}

module.exports = ConcussiveBolt;
