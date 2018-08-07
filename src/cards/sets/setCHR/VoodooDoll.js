"use strict";
const Constants = require ("../../../Constants");
const VoodooDollBase = require("../setME3/VoodooDoll");

class VoodooDoll extends VoodooDollBase {
  constructor (game) {
    super(game, "Voodoo Doll", "Chronicles", "CHR");
  }
}

module.exports = VoodooDoll;
