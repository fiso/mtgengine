"use strict";
const Constants = require ("../../../Constants");
const KrovikanSorcererBase = require("../set5ED/KrovikanSorcerer");

class KrovikanSorcerer extends KrovikanSorcererBase {
  constructor(game) {
    super(game, "Krovikan Sorcerer", "Masters Edition II", "ME2");
  }
}

module.exports = KrovikanSorcerer;
