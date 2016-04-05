"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteamBlast extends UnimplementedCard {
  constructor(game) {
    super(game, "Steam Blast", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SteamBlast;
