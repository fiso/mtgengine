"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SteamVents extends Card {
  constructor(game) {
    super(game, "Steam Vents", "Guildpact", "GPT");
  }
}

module.exports = SteamVents;
