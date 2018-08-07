"use strict";
const Constants = require ("../../../Constants");
const KorFirewalkerBase = require("../setA25/KorFirewalker");

class KorFirewalker extends KorFirewalkerBase {
  constructor (game) {
    super(game, "Kor Firewalker", "Wizards Play Network 2010", "PWP10");
  }
}

module.exports = KorFirewalker;
