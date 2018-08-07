"use strict";
const Constants = require ("../../../Constants");
const SigilCaptainBase = require("../setCMD/SigilCaptain");

class SigilCaptain extends SigilCaptainBase {
  constructor (game) {
    super(game, "Sigil Captain", "Alara Reborn", "ARB");
  }
}

module.exports = SigilCaptain;
