"use strict";
const Constants = require ("../../../Constants");
const VoodooDollBase = require("../setCHR/VoodooDoll");

class VoodooDoll extends VoodooDollBase {
  constructor (game) {
    super(game, "Voodoo Doll", "Legends", "LEG");
  }
}

module.exports = VoodooDoll;
