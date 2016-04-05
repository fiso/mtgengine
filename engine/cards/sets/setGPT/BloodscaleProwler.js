"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodscaleProwler extends UnimplementedCard {
  constructor(game) {
    super(game, "Bloodscale Prowler", "Guildpact", "GPT");
  }
}

module.exports = BloodscaleProwler;
