"use strict";
const Constants = require ("../../../Constants");
const KorDuelistBase = require("../setMM2/KorDuelist");

class KorDuelist extends KorDuelistBase {
  constructor (game) {
    super(game, "Kor Duelist", "Wizards Play Network 2009", "PWP09");
  }
}

module.exports = KorDuelist;
