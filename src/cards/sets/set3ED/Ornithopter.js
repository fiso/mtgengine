"use strict";
const Constants = require ("../../../Constants");
const OrnithopterBase = require("../setAER/Ornithopter");

class Ornithopter extends OrnithopterBase {
  constructor (game) {
    super(game, "Ornithopter", "Revised Edition", "3ED");
  }
}

module.exports = Ornithopter;
