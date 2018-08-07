"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkyshipStalker extends UnimplementedCard {
  constructor (game) {
    super(game, "Skyship Stalker", "Kaladesh", "KLD");
  }
}

module.exports = SkyshipStalker;
