"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteamVents extends UnimplementedCard {
  constructor (game) {
    super(game, "Steam Vents", "Zendikar Expeditions", "EXP");
  }
}

module.exports = SteamVents;
