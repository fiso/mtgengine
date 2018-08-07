"use strict";
const Constants = require ("../../../Constants");
const CharBase = require("../setV13/Char");

class Char extends CharBase {
  constructor (game) {
    super(game, "Char", "15th Anniversary Cards", "P15A");
  }
}

module.exports = Char;
