"use strict";
const Constants = require ("../../../Constants");
const FastbondBase = require("../setVMA/Fastbond");

class Fastbond extends FastbondBase {
  constructor (game) {
    super(game, "Fastbond", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = Fastbond;
