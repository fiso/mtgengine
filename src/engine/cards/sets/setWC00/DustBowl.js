"use strict";
const Constants = require ("../../../Constants");
const DustBowlBase = require("../setEXP/DustBowl");

class DustBowl extends DustBowlBase {
  constructor (game) {
    super(game, "Dust Bowl", "World Championship Decks 2000", "WC00");
  }
}

module.exports = DustBowl;
