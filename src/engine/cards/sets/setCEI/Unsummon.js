"use strict";
const Constants = require ("../../../Constants");
const UnsummonBase = require("../setE02/Unsummon");

class Unsummon extends UnsummonBase {
  constructor (game) {
    super(game, "Unsummon", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Unsummon;
