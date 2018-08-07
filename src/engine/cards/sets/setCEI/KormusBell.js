"use strict";
const Constants = require ("../../../Constants");
const KormusBellBase = require("../setME4/KormusBell");

class KormusBell extends KormusBellBase {
  constructor (game) {
    super(game, "Kormus Bell", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = KormusBell;
