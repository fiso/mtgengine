"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteamFrigate extends UnimplementedCard {
  constructor (game) {
    super(game, "Steam Frigate", "Portal Second Age", "PO2");
  }
}

module.exports = SteamFrigate;
