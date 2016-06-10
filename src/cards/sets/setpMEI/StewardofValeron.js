"use strict";
const Constants = require ("../../../Constants");
const StewardofValeronBase = require("../setDDG/StewardofValeron");

class StewardofValeron extends StewardofValeronBase {
  constructor (game) {
    super(game, "Steward of Valeron", "Media Inserts", "pMEI");
  }
}

module.exports = StewardofValeron;
