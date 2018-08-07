"use strict";
const Constants = require ("../../../Constants");
const RenegadeDemonBase = require("../setMTGA/RenegadeDemon");

class RenegadeDemon extends RenegadeDemonBase {
  constructor (game) {
    super(game, "Renegade Demon", "Avacyn Restored", "AVR");
  }
}

module.exports = RenegadeDemon;
