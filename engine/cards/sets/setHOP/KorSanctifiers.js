"use strict";
const Constants = require ("../../../Constants");
const KorSanctifiersBase = require("../setC14/KorSanctifiers");

class KorSanctifiers extends KorSanctifiersBase {
  constructor(game) {
    super(game, "Kor Sanctifiers", "Planechase", "HOP");
  }
}

module.exports = KorSanctifiers;
