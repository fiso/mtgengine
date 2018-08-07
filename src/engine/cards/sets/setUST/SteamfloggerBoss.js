"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteamfloggerBoss extends UnimplementedCard {
  constructor (game) {
    super(game, "Steamflogger Boss", "Unstable", "UST");
  }
}

module.exports = SteamfloggerBoss;
