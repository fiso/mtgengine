"use strict";
const Constants = require ("../../../Constants");
const OrnithopterBase = require("../setAER/Ornithopter");

class Ornithopter extends OrnithopterBase {
  constructor (game) {
    super(game, "Ornithopter", "Magic 2015", "M15");
  }
}

module.exports = Ornithopter;
