"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteamfloggerServiceRep extends UnimplementedCard {
  constructor (game) {
    super(game, "Steamflogger Service Rep", "Unstable", "UST");
  }
}

module.exports = SteamfloggerServiceRep;
