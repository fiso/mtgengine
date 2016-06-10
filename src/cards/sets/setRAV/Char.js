"use strict";
const Constants = require ("../../../Constants");
const CharBase = require("../setp15A/Char");

class Char extends CharBase {
  constructor (game) {
    super(game, "Char", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Char;
