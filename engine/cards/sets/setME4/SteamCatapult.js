"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SteamCatapult extends Card {
  constructor(game) {
    super(game, "Steam Catapult", "Masters Edition IV", "ME4");
  }
}

module.exports = SteamCatapult;
