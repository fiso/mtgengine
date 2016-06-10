"use strict";
const Constants = require ("../../../Constants");
const LurkingEvilBase = require("../setUSG/LurkingEvil");

class LurkingEvil extends LurkingEvilBase {
  constructor (game) {
    super(game, "Lurking Evil", "Vintage Masters", "VMA");
  }
}

module.exports = LurkingEvil;
