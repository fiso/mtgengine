"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteamFrigate extends UnimplementedCard {
  constructor (game) {
    super(game, "Steam Frigate", "Portal Second Age", "P02");
  }
}

module.exports = SteamFrigate;
