"use strict";
const Constants = require ("../../../Constants");
const OrnithopterBase = require("../setATQ/Ornithopter");

class Ornithopter extends OrnithopterBase {
  constructor (game) {
    super(game, "Ornithopter", "Tenth Edition", "10E");
  }
}

module.exports = Ornithopter;
