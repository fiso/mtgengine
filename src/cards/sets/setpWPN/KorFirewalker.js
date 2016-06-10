"use strict";
const Constants = require ("../../../Constants");
const KorFirewalkerBase = require("../setWWK/KorFirewalker");

class KorFirewalker extends KorFirewalkerBase {
  constructor (game) {
    super(game, "Kor Firewalker", "WPN and Gateway", "pWPN");
  }
}

module.exports = KorFirewalker;
