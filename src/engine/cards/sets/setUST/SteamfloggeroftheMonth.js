"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteamfloggeroftheMonth extends UnimplementedCard {
  constructor (game) {
    super(game, "Steamflogger of the Month", "Unstable", "UST");
  }
}

module.exports = SteamfloggeroftheMonth;
