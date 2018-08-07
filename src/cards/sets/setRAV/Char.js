"use strict";
const Constants = require ("../../../Constants");
const CharBase = require("../setV13/Char");

class Char extends CharBase {
  constructor (game) {
    super(game, "Char", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Char;
