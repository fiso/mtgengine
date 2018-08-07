"use strict";
const Constants = require ("../../../Constants");
const OrnithopterBase = require("../setAER/Ornithopter");

class Ornithopter extends OrnithopterBase {
  constructor (game) {
    super(game, "Ornithopter", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = Ornithopter;
