"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeapofFlame extends UnimplementedCard {
  constructor(game) {
    super(game, "Leap of Flame", "Guildpact", "GPT");
  }
}

module.exports = LeapofFlame;
