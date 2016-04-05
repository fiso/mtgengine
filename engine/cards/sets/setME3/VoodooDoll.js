"use strict";
const Constants = require ("../../../Constants");
const VoodooDollBase = require("../setCHR/VoodooDoll");

class VoodooDoll extends VoodooDollBase {
  constructor(game) {
    super(game, "Voodoo Doll", "Masters Edition III", "ME3");
  }
}

module.exports = VoodooDoll;
