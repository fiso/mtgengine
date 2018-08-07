"use strict";
const Constants = require ("../../../Constants");
const DreadofNightBase = require("../set6ED/DreadofNight");

class DreadofNight extends DreadofNightBase {
  constructor (game) {
    super(game, "Dread of Night", "World Championship Decks 1998", "WC98");
  }
}

module.exports = DreadofNight;
