"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteamAugury extends UnimplementedCard {
  constructor (game) {
    super(game, "Steam Augury", "Commander 2015", "C15");
  }
}

module.exports = SteamAugury;
