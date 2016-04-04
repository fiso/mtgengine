"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeapofFlame extends Card {
  constructor(game) {
    super(game, "Leap of Flame", "Guildpact", "GPT");
  }
}

module.exports = LeapofFlame;
