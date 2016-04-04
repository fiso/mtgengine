"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodscaleProwler extends Card {
  constructor(game) {
    super(game, "Bloodscale Prowler", "Guildpact", "GPT");
  }
}

module.exports = BloodscaleProwler;
