"use strict";
const Constants = require ("../../../Constants");
const OrnithopterBase = require("../setATQ/Ornithopter");

class Ornithopter extends OrnithopterBase {
  constructor(game) {
    super(game, "Ornithopter", "Ninth Edition", "9ED");
  }
}

module.exports = Ornithopter;
