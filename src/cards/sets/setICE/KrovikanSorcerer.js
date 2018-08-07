"use strict";
const Constants = require ("../../../Constants");
const KrovikanSorcererBase = require("../setVMA/KrovikanSorcerer");

class KrovikanSorcerer extends KrovikanSorcererBase {
  constructor (game) {
    super(game, "Krovikan Sorcerer", "Ice Age", "ICE");
  }
}

module.exports = KrovikanSorcerer;
