"use strict";
const Constants = require ("../../../Constants");
const KorSanctifiersBase = require("../setC14/KorSanctifiers");

class KorSanctifiers extends KorSanctifiersBase {
  constructor(game) {
    super(game, "Kor Sanctifiers", "Commander 2015", "C15");
  }
}

module.exports = KorSanctifiers;
