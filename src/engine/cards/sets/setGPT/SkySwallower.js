"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkySwallower extends UnimplementedCard {
  constructor (game) {
    super(game, "Sky Swallower", "Guildpact", "GPT");
  }
}

module.exports = SkySwallower;
