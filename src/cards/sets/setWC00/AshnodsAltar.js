"use strict";
const Constants = require ("../../../Constants");
const AshnodsAltarBase = require("../setEMA/AshnodsAltar");

class AshnodsAltar extends AshnodsAltarBase {
  constructor (game) {
    super(game, "Ashnod's Altar", "World Championship Decks 2000", "WC00");
  }
}

module.exports = AshnodsAltar;
