"use strict";
const Constants = require ("../../../Constants");
const FastbondBase = require("../setVMA/Fastbond");

class Fastbond extends FastbondBase {
  constructor (game) {
    super(game, "Fastbond", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Fastbond;
