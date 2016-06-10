"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteamCatapult extends UnimplementedCard {
  constructor (game) {
    super(game, "Steam Catapult", "Masters Edition IV", "ME4");
  }
}

module.exports = SteamCatapult;
