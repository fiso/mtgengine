"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EarthSurge extends UnimplementedCard {
  constructor(game) {
    super(game, "Earth Surge", "Guildpact", "GPT");
  }
}

module.exports = EarthSurge;
