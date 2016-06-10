"use strict";
const Constants = require ("../../../Constants");
const KormusBellBase = require("../setCED/KormusBell");

class KormusBell extends KormusBellBase {
  constructor (game) {
    super(game, "Kormus Bell", "Limited Edition Alpha", "LEA");
  }
}

module.exports = KormusBell;
