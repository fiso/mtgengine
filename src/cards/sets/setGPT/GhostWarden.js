"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostWarden extends UnimplementedCard {
  constructor(game) {
    super(game, "Ghost Warden", "Guildpact", "GPT");
  }
}

module.exports = GhostWarden;
