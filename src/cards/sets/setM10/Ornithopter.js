"use strict";
const Constants = require ("../../../Constants");
const OrnithopterBase = require("../setATQ/Ornithopter");

class Ornithopter extends OrnithopterBase {
  constructor (game) {
    super(game, "Ornithopter", "Magic 2010", "M10");
  }
}

module.exports = Ornithopter;
