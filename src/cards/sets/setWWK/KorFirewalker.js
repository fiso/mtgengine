"use strict";
const Constants = require ("../../../Constants");
const KorFirewalkerBase = require("../setA25/KorFirewalker");

class KorFirewalker extends KorFirewalkerBase {
  constructor (game) {
    super(game, "Kor Firewalker", "Worldwake", "WWK");
  }
}

module.exports = KorFirewalker;
