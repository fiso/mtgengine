"use strict";
const Constants = require ("../../../Constants");
const LurkingEvilBase = require("../setVMA/LurkingEvil");

class LurkingEvil extends LurkingEvilBase {
  constructor (game) {
    super(game, "Lurking Evil", "Urza's Saga", "USG");
  }
}

module.exports = LurkingEvil;
