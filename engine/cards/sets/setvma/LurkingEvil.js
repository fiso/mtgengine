"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LurkingEvilBase = require("../setUSG/LurkingEvil.js");

class LurkingEvil extends LurkingEvilBase {
  constructor(game) {
    super(game, "Lurking Evil", "Vintage Masters", "VMA");
  }
}

module.exports = LurkingEvil;
