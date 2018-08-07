"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteamPowered extends UnimplementedCard {
  constructor (game) {
    super(game, "Steam-Powered", "Unstable", "UST");
  }
}

module.exports = SteamPowered;
