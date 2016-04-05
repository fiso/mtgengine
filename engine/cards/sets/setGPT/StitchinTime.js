"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StitchinTime extends UnimplementedCard {
  constructor(game) {
    super(game, "Stitch in Time", "Guildpact", "GPT");
  }
}

module.exports = StitchinTime;
