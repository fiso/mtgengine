"use strict";
const Constants = require ("../../../Constants");
const SickeningDreamsBase = require("../setPD3/SickeningDreams");

class SickeningDreams extends SickeningDreamsBase {
  constructor (game) {
    super(game, "Sickening Dreams", "World Championship Decks 2003", "WC03");
  }
}

module.exports = SickeningDreams;
