"use strict";
const Constants = require ("../../../Constants");
const KorSanctifiersBase = require("../setC15/KorSanctifiers");

class KorSanctifiers extends KorSanctifiersBase {
  constructor (game) {
    super(game, "Kor Sanctifiers", "Commander 2014", "C14");
  }
}

module.exports = KorSanctifiers;
