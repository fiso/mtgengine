"use strict";
const Constants = require ("../../../Constants");
const FastbondBase = require("../setVMA/Fastbond");

class Fastbond extends FastbondBase {
  constructor (game) {
    super(game, "Fastbond", "Collectors’ Edition", "CED");
  }
}

module.exports = Fastbond;
