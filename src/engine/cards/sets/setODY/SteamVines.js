"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteamVines extends UnimplementedCard {
  constructor (game) {
    super(game, "Steam Vines", "Odyssey", "ODY");
  }
}

module.exports = SteamVines;
