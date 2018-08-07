"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteamfloggerTemp extends UnimplementedCard {
  constructor (game) {
    super(game, "Steamflogger Temp", "Unstable", "UST");
  }
}

module.exports = SteamfloggerTemp;
