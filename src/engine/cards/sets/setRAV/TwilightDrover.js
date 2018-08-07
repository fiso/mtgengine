"use strict";
const Constants = require ("../../../Constants");
const TwilightDroverBase = require("../setDDK/TwilightDrover");

class TwilightDrover extends TwilightDroverBase {
  constructor (game) {
    super(game, "Twilight Drover", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = TwilightDrover;
