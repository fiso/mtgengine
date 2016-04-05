"use strict";
const Constants = require ("../../../Constants");
const ArenaoftheAncientsBase = require("../setCHR/ArenaoftheAncients");

class ArenaoftheAncients extends ArenaoftheAncientsBase {
  constructor(game) {
    super(game, "Arena of the Ancients", "Legends", "LEG");
  }
}

module.exports = ArenaoftheAncients;
