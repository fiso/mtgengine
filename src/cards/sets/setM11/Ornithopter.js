"use strict";
const Constants = require ("../../../Constants");
const OrnithopterBase = require("../setATQ/Ornithopter");

class Ornithopter extends OrnithopterBase {
  constructor(game) {
    super(game, "Ornithopter", "Magic 2011", "M11");
  }
}

module.exports = Ornithopter;
