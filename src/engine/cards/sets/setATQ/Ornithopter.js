"use strict";
const Constants = require ("../../../Constants");
const OrnithopterBase = require("../setAER/Ornithopter");

class Ornithopter extends OrnithopterBase {
  constructor (game) {
    super(game, "Ornithopter", "Antiquities", "ATQ");
  }
}

module.exports = Ornithopter;
