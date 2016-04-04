"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteamVents extends UnimplementedCard {
  constructor(game) {
    super(game, "Steam Vents", "Guildpact", "GPT");
  }
}

module.exports = SteamVents;
