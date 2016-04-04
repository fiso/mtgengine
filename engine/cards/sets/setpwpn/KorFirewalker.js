"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KorFirewalkerBase = require("../setWWK/KorFirewalker.js");

class KorFirewalker extends KorFirewalkerBase {
  constructor(game) {
    super(game, "Kor Firewalker", "WPN and Gateway", "pWPN");
  }
}

module.exports = KorFirewalker;
